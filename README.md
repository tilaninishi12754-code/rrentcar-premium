# RightRentCar — premium fleet redesign

Локальная React-версия страницы автопарка RightRentCar.

## Что внутри

- адаптивная арт-дирекция для desktop / tablet / mobile;
- 21 автомобиль из публичного автопарка RightRentCar с актуальными на момент сборки тарифами и залогами;
- публичные изображения автомобилей RightRentCar с локальным SVG-fallback;
- фильтры по сценарию поездки;
- интерактивный spotlight на карточках и parallax первого экрана;
- мягкие reveal-анимации и progressive enhancement через Motion;
- `prefers-reduced-motion`, focus-visible, клавиатурное закрытие и focus trap модального окна;
- форма с клиентской валидацией, которая подготавливает письмо на официальный email RightRentCar, без стороннего обработчика;
- SEO metadata, favicon и Open Graph;
- production build в `dist/`.

## Команды проекта

```bash
npm run lint
npm run build
npm run dev
```

Локальный адрес по умолчанию: `http://127.0.0.1:4173/`.

## QA

`python scripts/browser_check.py` прогоняет Chromium в desktop, tablet, mobile и reduced-motion режимах. Последний отчёт лежит в `browser-check.json`, скриншоты рядом с проектом.

## Примечание по зависимостям

Среда сборки не имела исходящего npm-доступа, поэтому React/ReactDOM используются как локально vendored production runtime. Motion подключён как progressive enhancement; если CDN недоступен, нативный IntersectionObserver и CSS сохраняют весь основной UX.

## GitHub Pages preview

Репозиторий подготовлен по той же простой схеме, что и RollsBar: GitHub Pages может публиковать `main` → `/(root)` без отдельного build workflow. Production-файлы продублированы в корень, исходники остаются в `src/`, полная сборка — в `dist/`.

Для preview добавлен `robots=noindex,nofollow`, canonical остаётся на `https://rrentcar.ru/avtopark/`.
