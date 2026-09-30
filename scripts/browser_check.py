import asyncio, json
from pathlib import Path
from playwright.async_api import async_playwright

OUT = Path('/mnt/data/rrentcar-premium')
DIST = OUT/'dist'

react = (DIST/'vendor/react.production.min.js').read_text(encoding='utf-8')
reactdom = (DIST/'vendor/react-dom.production.min.js').read_text(encoding='utf-8')
app = (DIST/'app.js').read_text(encoding='utf-8')
css = (DIST/'styles.css').read_text(encoding='utf-8')
hero = (DIST/'assets/hero-car.svg').read_text(encoding='utf-8')
# Embed hero asset as data URL so layout check stays entirely local.
import base64
hero_data = 'data:image/svg+xml;base64,' + base64.b64encode(hero.encode()).decode()
app = app.replace('./assets/hero-car.svg', hero_data)

HTML = f'''<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>{css}</style></head><body><div id="root"></div><script>{react}</script><script>{reactdom}</script><script>{app}</script></body></html>'''

async def run(viewport, name, dpr=1, reduced='no-preference'):
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox','--disable-dev-shm-usage','--disable-gpu'])
        context = await browser.new_context(viewport=viewport, device_scale_factor=dpr, reduced_motion=reduced)
        page = await context.new_page()
        issues=[]
        page.on('console', lambda msg: issues.append({'type':'console','level':msg.type,'text':msg.text}) if msg.type in ['error','warning'] else None)
        page.on('pageerror', lambda exc: issues.append({'type':'pageerror','text':str(exc)}))
        async def local_media(route):
            if route.request.url.startswith('https://rrentcar.ru/media/'):
                await route.fulfill(status=200, content_type='image/svg+xml', body=hero)
            else:
                await route.abort()
        await page.route('**/*', local_media)
        await page.set_content(HTML, wait_until='domcontentloaded', timeout=15000)
        await page.wait_for_timeout(500)
        await page.evaluate("document.querySelectorAll('[data-reveal]').forEach(e=>e.classList.add('is-visible'))")
        metrics = await page.evaluate('''() => ({
          width: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          height: document.documentElement.clientHeight,
          scrollHeight: document.documentElement.scrollHeight,
          cards: document.querySelectorAll('.car-card').length,
          header: document.querySelector('.site-header')?.getBoundingClientRect().height || 0,
          h1: document.querySelector('h1')?.getBoundingClientRect().toJSON() || null,
          clippedText: [...document.querySelectorAll('h1,h2,h3,p,a,button,span,strong')].filter(e => e.scrollWidth > e.clientWidth + 3 && !['hidden','auto','scroll'].includes(getComputedStyle(e).overflowX)).slice(0,12).map(e => ({tag:e.tagName, cls:e.className, text:(e.textContent||'').trim().slice(0,60), sw:e.scrollWidth,cw:e.clientWidth})),
          bodyOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
        })''')
        await page.screenshot(path=str(OUT/f'{name}.png'), full_page=True)
        if viewport['width'] <= 620:
            await page.click('.menu-button')
            await page.wait_for_timeout(80)
            metrics['menuVisible'] = await page.locator('.nav').evaluate("e=>getComputedStyle(e).pointerEvents !== 'none' && getComputedStyle(e).opacity !== '0'")
            await page.click('.menu-button')
        await page.locator('.car-card .card-cta').first.click()
        await page.wait_for_timeout(80)
        metrics['modalVisible'] = await page.locator('.modal').is_visible()
        metrics['modalTitle'] = await page.locator('#booking-title').inner_text()
        await page.keyboard.press('Escape')
        metrics['modalClosedByEsc'] = not await page.locator('.modal').is_visible()
        # Validate the complete form flow without launching an email client.
        await page.locator('.car-card .card-cta').first.click()
        await page.fill('input[name="name"]', 'Тест')
        await page.fill('input[name="phone"]', '+7 999 123-45-67')
        await page.fill('textarea[name="comment"]', '12–17 октября')
        await page.click('form button[type="submit"]')
        await page.wait_for_timeout(50)
        metrics['formSuccess'] = await page.locator('.form-success').is_visible()
        metrics['mailtoReady'] = (await page.locator('.success-actions a[href^="mailto:"]').count()) == 1
        await page.keyboard.press('Escape')
        await page.get_by_role('button', name='Кабриолеты').click()
        await page.wait_for_timeout(100)
        metrics['cabrioCards'] = await page.locator('.car-card').count()
        await browser.close()
        return {'metrics': metrics, 'issues': issues}

async def main():
    results={}
    results['desktop']=await run({'width':1440,'height':1100},'desktop')
    results['tablet']=await run({'width':820,'height':1180},'tablet',1)
    results['mobile']=await run({'width':390,'height':844},'mobile',2)
    results['reduced_motion']=await run({'width':390,'height':844},'reduced-motion',1,'reduce')
    (OUT/'browser-check.json').write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(results, ensure_ascii=False, indent=2))

asyncio.run(main())
