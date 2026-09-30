const CARS = [
{name:'Audi A3 Cabrio',year:'2017',className:'Кабриолет',category:'cabrio',body:'Кабриолет',drive:'Передний',seats:4,gearbox:'AT7',shortPrice:9990,longPrice:7990,deposit:35000,badge:'Open air',image:'https://rrentcar.ru/media/cache/60/54/60541d1e84475e0e8c6bc22c15b7ff18.jpg'},
{name:'Audi A4',year:'2019',className:'Бизнес-средний',category:'business',body:'Седан',drive:'Передний',seats:5,gearbox:'AT7',shortPrice:6650,longPrice:5490,deposit:25000,badge:'Отличное предложение',image:'https://rrentcar.ru/media/cache/03/fd/03fdfa7dae8b00d07781de0418074ce7.jpg'},
{name:'Audi A6 New',year:'2021',className:'Бизнес класс',category:'business',body:'Седан',drive:'Полный',seats:5,gearbox:'АКПП',shortPrice:12490,longPrice:10490,deposit:45000,badge:'Бизнес',image:'https://rrentcar.ru/media/cache/fb/04/fb043eaa198870def3644ea019cb4fca.jpg'},
{name:'VW Tiguan',year:'2019–2020',className:'Кроссовер',category:'suv',body:'Кроссовер',drive:'Полный',seats:5,gearbox:'АКП',shortPrice:5490,longPrice:4350,deposit:20000,badge:'Полный привод',image:'https://rrentcar.ru/media/cache/97/cb/97cb3bd72c3c259f99ce8e005d400c9a.jpg'},
{name:'Audi Q3 New',year:'2020',className:'Кроссовер',category:'suv',body:'Кроссовер',drive:'Передний',seats:5,gearbox:'АКП',shortPrice:6990,longPrice:5990,deposit:30000,image:'https://rrentcar.ru/media/cache/0b/a6/0ba637c821596de61f754a81d04be87c.jpg'},
{name:'BMW X4 xDrive',year:'2021',className:'Premium SUV',category:'suv',body:'Внедорожник',drive:'Полный',seats:5,gearbox:'АКПП',shortPrice:12490,longPrice:9990,deposit:30000,badge:'Premium SUV',image:'https://rrentcar.ru/media/cache/2d/63/2d636eaa39f91c5d7434cfb60add80bb.jpg'},
{name:'Mercedes Vito',year:'2019',className:'8 мест',category:'family',body:'Минивэн',drive:'Задний',seats:8,gearbox:'7G-Tronic',shortPrice:11990,longPrice:9490,deposit:35000,badge:'8 мест',image:'https://rrentcar.ru/media/cache/08/aa/08aa796c9e9ab4d3bce93a592ab22b8c.jpg'},
{name:'Kia XCeed New',year:'2020',className:'Кросс-хетч',category:'suv',body:'Хэтчбэк',drive:'Передний',seats:5,gearbox:'АКПП',shortPrice:4650,longPrice:3850,deposit:20000,badge:'Горячая новинка',image:'https://rrentcar.ru/media/cache/44/dc/44dcd31de4efddd79a23ff39a6ec70e1.jpg'},
{name:'Tank 300',year:'2024',className:'Внедорожник',category:'new',body:'Внедорожник',drive:'Полный',seats:5,gearbox:'АКПП',shortPrice:11990,longPrice:8490,deposit:35000,badge:'Для дорог и направлений',image:'https://rrentcar.ru/media/cache/75/01/75015940a04c23823a08098d3d0af0ec.jpg'},
{name:'BMW 520D xDrive',year:'2022',className:'Бизнес класс',category:'business',body:'Седан',drive:'Полный',seats:5,gearbox:'АКПП',shortPrice:9490,longPrice:8490,deposit:45000,image:'https://rrentcar.ru/media/cache/2f/8d/2f8d0373b251d6f2fb02bb9791e2905f.jpg'},
{name:'Skoda Karoq',year:'2021',className:'Кроссовер',category:'suv',body:'Кроссовер',drive:'Передний',seats:5,gearbox:'АКП',shortPrice:5490,longPrice:4350,deposit:20000,image:'https://rrentcar.ru/media/cache/b9/ba/b9ba95b7c22e709ed3c76c2570521e1d.jpg'},
{name:'Audi Q5 Quattro',year:'2018',className:'Кроссовер',category:'suv',body:'Кроссовер',drive:'Полный',seats:5,gearbox:'AT7',shortPrice:12490,longPrice:8490,deposit:30000,image:'https://rrentcar.ru/media/cache/53/52/53525cbb2efa7bd17d7699647ae9d467.jpg'},
{name:'Changan Deepal G318',year:'2025',className:'Премиум гибрид',category:'new',body:'Внедорожник',drive:'Полный',seats:5,gearbox:'АКПП',shortPrice:15990,longPrice:11990,deposit:50000,badge:'2025 • Hybrid',image:'https://rrentcar.ru/media/cache/cc/38/cc38792bbd7b6866cd2636f69384fcc4.jpg'},
{name:'Mercedes V-Class',year:'2020',className:'Микроавтобус',category:'family',body:'Минивэн',drive:'Полный',seats:7,gearbox:'АКПП',shortPrice:18490,longPrice:14490,deposit:35000,badge:'7 мест',image:'https://rrentcar.ru/media/cache/fa/ab/faab48a0f20d101833e59374770028f5.jpg'},
{name:'BMW 4 Cabrio',year:'2022',className:'Кабриолет',category:'cabrio',body:'Кабриолет',drive:'Задний',seats:4,gearbox:'АКПП',shortPrice:19990,longPrice:14990,deposit:60000,badge:'Open air',image:'https://rrentcar.ru/media/cache/fd/53/fd5312fc3231486c9976e4b951c632f0.jpg'},
{name:'BMW 3er',year:'2021',className:'Бизнес-средний',category:'business',body:'Седан',drive:'Задний',seats:5,gearbox:'АКПП',shortPrice:8490,longPrice:6990,deposit:30000,image:'https://rrentcar.ru/media/cache/59/39/5939f8c439fd92955a2bfd535418858b.jpg'},
{name:'Toyota Camry',year:'2025',className:'Бизнес класс',category:'new',body:'Седан',drive:'Передний',seats:5,gearbox:'АКПП',shortPrice:8490,longPrice:6990,deposit:40000,badge:'2025',image:'https://rrentcar.ru/media/cache/4d/4c/4d4c825251d2e334284488702755fad6.jpg'},
{name:'Audi A3 Sedan',year:'2017',className:'Бизнес-эконом',category:'business',body:'Седан',drive:'Передний',seats:5,gearbox:'АКПП',shortPrice:4650,longPrice:3650,deposit:15000,image:'https://rrentcar.ru/media/cache/d1/f8/d1f8531ba5f7342e5a8546bf66b95386.jpg'},
{name:'ГАЗ-24 «Волга»',year:'1982',className:'Ретро',category:'retro',body:'Седан',drive:'Задний',seats:5,gearbox:'Механика',shortPrice:9990,longPrice:5990,deposit:20000,badge:'Эксклюзив',image:'https://rrentcar.ru/media/cache/49/e8/49e8f94b2cb0271b7f7db50dfd1221d8.jpg'},
{name:'Voyah Free 318',year:'2025',className:'Премиум гибрид',category:'new',body:'Кроссовер',drive:'Полный',seats:5,gearbox:'АКПП',shortPrice:15990,longPrice:10490,deposit:50000,badge:'2025 • Hybrid',image:'https://rrentcar.ru/media/cache/9f/3b/9f3b271704030229d67706aab155de10.jpg'},
{name:'VW Tiguan 2021',year:'2021',className:'Кроссовер',category:'suv',body:'Кроссовер',drive:'Передний',seats:5,gearbox:'АКП',shortPrice:5850,longPrice:4650,deposit:20000,image:'https://rrentcar.ru/media/cache/79/f6/79f6a2a484bc54f7b2f9e6f873ab6f18.jpg'}
];

const money=n=>new Intl.NumberFormat('ru-RU').format(n)+' ₽';
const grid=document.getElementById('fleet-grid');
const showAll=document.getElementById('show-all');
let active='all', expanded=false;

function visibleCars(){const source=active==='all'?CARS:CARS.filter(c=>active==='new'?c.category==='new'||c.year==='2025':c.category===active);return active==='all'&&!expanded?source.slice(0,9):source;}
function card(c){return `<article class="car-card"><div class="car-media"><img src="${c.image}" alt="${c.name}, ${c.year}" loading="lazy"><span class="car-chip">${c.year}</span>${c.badge?`<span class="car-badge">${c.badge}</span>`:''}</div><div class="car-body"><div class="car-kicker">${c.className}</div><h3>${c.name}</h3><div class="spec-row"><span>${c.gearbox}</span><span>${c.body}</span><span>${c.drive}</span><span>${c.seats} мест</span></div><div class="price-row"><div><small>1–2 суток</small><strong>${money(c.shortPrice)}</strong></div><div><small>10+ суток</small><strong>${money(c.longPrice)}</strong></div></div><div class="deposit-row"><span>Залог</span><strong>${money(c.deposit)}</strong></div><button class="button button--primary" data-book data-car="${c.name}">Забронировать</button></div></article>`}
function renderCars(){const cars=visibleCars();grid.innerHTML=cars.map(card).join('');showAll.hidden=active!=='all'||expanded;wireBooking();}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{active=btn.dataset.filter;expanded=false;document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));renderCars();}));
showAll.addEventListener('click',()=>{expanded=true;renderCars();});

const modal=document.getElementById('booking-modal'), form=document.getElementById('booking-form'), carField=document.getElementById('booking-car');
let lastFocus=null;
function openModal(car=''){lastFocus=document.activeElement;carField.value=car;modal.hidden=false;document.body.style.overflow='hidden';setTimeout(()=>form.elements.name.focus(),0)}
function closeModal(){modal.hidden=true;document.body.style.overflow='';if(lastFocus)lastFocus.focus()}
function wireBooking(){document.querySelectorAll('[data-book]').forEach(btn=>{if(btn.dataset.wired)return;btn.dataset.wired='1';btn.addEventListener('click',()=>openModal(btn.dataset.car||''));});}
wireBooking();
document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal();});
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const subject=encodeURIComponent(`Заявка с preview RightRentCar${d.get('car')?' — '+d.get('car'):''}`);const body=encodeURIComponent(`Имя: ${d.get('name')}\nТелефон: ${d.get('phone')}\nАвтомобиль: ${d.get('car')||'не выбран'}\n\nОтправлено из концепта нового сайта RightRentCar.`);location.href=`mailto:RightRentCar@gmail.com?subject=${subject}&body=${body}`;});

const menu=document.querySelector('.main-nav'),toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const visual=document.getElementById('hero-visual');visual.addEventListener('pointermove',e=>{if(innerWidth<900)return;const r=visual.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;visual.style.transform=`perspective(1000px) rotateX(${(-y*2.5).toFixed(2)}deg) rotateY(${(x*3).toFixed(2)}deg) translateY(-2px)`});visual.addEventListener('pointerleave',()=>visual.style.transform='');}

renderCars();
