type Car = {
  name: string; year: string; className: string; category: string; body: string; drive: string;
  seats: number; gearbox: string; shortPrice: number; longPrice: number; deposit: number; badge?: string; image: string;
};

type AppState = {
  filter: string; expanded: boolean; menuOpen: boolean; modalOpen: boolean; selected: Car | null;
  formSent: boolean; mailtoHref: string; formError: boolean;
};

const CARS: Car[] = [
  { name:'Audi A3 Cabrio', year:'2017', className:'Кабриолет', category:'cabrio', body:'Кабриолет', drive:'Передний', seats:4, gearbox:'AT7', shortPrice:9990, longPrice:7990, deposit:35000, badge:'Open air', image:'https://rrentcar.ru/media/cache/60/54/60541d1e84475e0e8c6bc22c15b7ff18.jpg' },
  { name:'Audi A4', year:'2019', className:'Бизнес-средний', category:'business', body:'Седан', drive:'Передний', seats:5, gearbox:'AT7', shortPrice:6650, longPrice:5490, deposit:25000, badge:'Отличное предложение', image:'https://rrentcar.ru/media/cache/03/fd/03fdfa7dae8b00d07781de0418074ce7.jpg' },
  { name:'Audi A6 New', year:'2021', className:'Бизнес класс', category:'business', body:'Седан', drive:'Полный', seats:5, gearbox:'АКПП', shortPrice:12490, longPrice:10490, deposit:45000, badge:'Бизнес', image:'https://rrentcar.ru/media/cache/fb/04/fb043eaa198870def3644ea019cb4fca.jpg' },
  { name:'VW Tiguan', year:'2019–2020', className:'Кроссовер', category:'suv', body:'Кроссовер', drive:'Полный', seats:5, gearbox:'АКП', shortPrice:5490, longPrice:4350, deposit:20000, badge:'Полный привод', image:'https://rrentcar.ru/media/cache/97/cb/97cb3bd72c3c259f99ce8e005d400c9a.jpg' },
  { name:'Audi Q3 New', year:'2020', className:'Кроссовер', category:'suv', body:'Кроссовер', drive:'Передний', seats:5, gearbox:'АКП', shortPrice:6990, longPrice:5990, deposit:30000, image:'https://rrentcar.ru/media/cache/0b/a6/0ba637c821596de61f754a81d04be87c.jpg' },
  { name:'BMW X4 xDrive', year:'2021', className:'Premium SUV', category:'suv', body:'Внедорожник', drive:'Полный', seats:5, gearbox:'АКПП', shortPrice:12490, longPrice:9990, deposit:30000, badge:'Premium SUV', image:'https://rrentcar.ru/media/cache/2d/63/2d636eaa39f91c5d7434cfb60add80bb.jpg' },
  { name:'Mercedes Vito', year:'2019', className:'8 мест', category:'family', body:'Минивэн', drive:'Задний', seats:8, gearbox:'7G-Tronic', shortPrice:11990, longPrice:9490, deposit:35000, badge:'8 мест', image:'https://rrentcar.ru/media/cache/08/aa/08aa796c9e9ab4d3bce93a592ab22b8c.jpg' },
  { name:'Kia XCeed New', year:'2020', className:'Кросс-хетч', category:'suv', body:'Хэтчбэк', drive:'Передний', seats:5, gearbox:'АКПП', shortPrice:4650, longPrice:3850, deposit:20000, badge:'Горячая новинка', image:'https://rrentcar.ru/media/cache/44/dc/44dcd31de4efddd79a23ff39a6ec70e1.jpg' },
  { name:'Tank 300', year:'2024', className:'Внедорожник', category:'new', body:'Внедорожник', drive:'Полный', seats:5, gearbox:'АКПП', shortPrice:11990, longPrice:8490, deposit:35000, badge:'Для дорог и направлений', image:'https://rrentcar.ru/media/cache/75/01/75015940a04c23823a08098d3d0af0ec.jpg' },
  { name:'BMW 520D xDrive', year:'2022', className:'Бизнес класс', category:'business', body:'Седан', drive:'Полный', seats:5, gearbox:'АКПП', shortPrice:9490, longPrice:8490, deposit:45000, image:'https://rrentcar.ru/media/cache/2f/8d/2f8d0373b251d6f2fb02bb9791e2905f.jpg' },
  { name:'Skoda Karoq', year:'2021', className:'Кроссовер', category:'suv', body:'Кроссовер', drive:'Передний', seats:5, gearbox:'АКП', shortPrice:5490, longPrice:4350, deposit:20000, image:'https://rrentcar.ru/media/cache/b9/ba/b9ba95b7c22e709ed3c76c2570521e1d.jpg' },
  { name:'Audi Q5 Quattro', year:'2018', className:'Кроссовер', category:'suv', body:'Кроссовер', drive:'Полный', seats:5, gearbox:'AT7', shortPrice:12490, longPrice:8490, deposit:30000, image:'https://rrentcar.ru/media/cache/53/52/53525cbb2efa7bd17d7699647ae9d467.jpg' },
  { name:'Changan Deepal G318', year:'2025', className:'Премиум гибрид', category:'new', body:'Внедорожник', drive:'Полный', seats:5, gearbox:'АКПП', shortPrice:15990, longPrice:11990, deposit:50000, badge:'2025 • Hybrid', image:'https://rrentcar.ru/media/cache/cc/38/cc38792bbd7b6866cd2636f69384fcc4.jpg' },
  { name:'Mercedes V-Class', year:'2020', className:'Микроавтобус', category:'family', body:'Минивэн', drive:'Полный', seats:7, gearbox:'АКПП', shortPrice:18490, longPrice:14490, deposit:35000, badge:'7 мест', image:'https://rrentcar.ru/media/cache/fa/ab/faab48a0f20d101833e59374770028f5.jpg' },
  { name:'BMW 4 Cabrio', year:'2022', className:'Кабриолет', category:'cabrio', body:'Кабриолет', drive:'Задний', seats:4, gearbox:'АКПП', shortPrice:19990, longPrice:14990, deposit:60000, badge:'Open air', image:'https://rrentcar.ru/media/cache/fd/53/fd5312fc3231486c9976e4b951c632f0.jpg' },
  { name:'BMW 3er', year:'2021', className:'Бизнес-средний', category:'business', body:'Седан', drive:'Задний', seats:5, gearbox:'АКПП', shortPrice:8490, longPrice:6990, deposit:30000, image:'https://rrentcar.ru/media/cache/59/39/5939f8c439fd92955a2bfd535418858b.jpg' },
  { name:'Toyota Camry', year:'2025', className:'Бизнес класс', category:'new', body:'Седан', drive:'Передний', seats:5, gearbox:'АКПП', shortPrice:8490, longPrice:6990, deposit:40000, badge:'2025', image:'https://rrentcar.ru/media/cache/4d/4c/4d4c825251d2e334284488702755fad6.jpg' },
  { name:'Audi A3 Sedan', year:'2017', className:'Бизнес-эконом', category:'business', body:'Седан', drive:'Передний', seats:5, gearbox:'АКПП', shortPrice:4650, longPrice:3650, deposit:15000, image:'https://rrentcar.ru/media/cache/d1/f8/d1f8531ba5f7342e5a8546bf66b95386.jpg' },
  { name:'ГАЗ-24 «Волга»', year:'1982', className:'Ретро', category:'retro', body:'Седан', drive:'Задний', seats:5, gearbox:'Механика', shortPrice:9990, longPrice:5990, deposit:20000, badge:'Эксклюзив', image:'https://rrentcar.ru/media/cache/49/e8/49e8f94b2cb0271b7f7db50dfd1221d8.jpg' },
  { name:'Voyah Free 318', year:'2025', className:'Премиум гибрид', category:'new', body:'Кроссовер', drive:'Полный', seats:5, gearbox:'АКПП', shortPrice:15990, longPrice:10490, deposit:50000, badge:'2025 • Hybrid', image:'https://rrentcar.ru/media/cache/9f/3b/9f3b271704030229d67706aab155de10.jpg' },
  { name:'VW Tiguan', year:'2021', className:'Кроссовер', category:'suv', body:'Кроссовер', drive:'Передний', seats:5, gearbox:'АКП', shortPrice:5850, longPrice:4650, deposit:20000, image:'https://rrentcar.ru/media/cache/79/f6/79f6a2a484bc54f7b2f9e6f873ab6f18.jpg' }
];

const FILTERS = [
  ['all','Все автомобили'], ['suv','Кроссоверы'], ['business','Бизнес'], ['cabrio','Кабриолеты'], ['family','7+ мест'], ['new','Новинки']
];

function money(value:number){ return new Intl.NumberFormat('ru-RU').format(value)+' ₽'; }

function Icon(props:{name:string;size?:number}){
  const s=props.size||18;
  const c={width:s,height:s,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':'true'};
  const p:any={
    arrow:<g><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></g>,
    phone:<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 2 2.3z"/>,
    menu:<g><path d="M4 7h16M4 12h16M4 17h16"/></g>, close:<g><path d="M18 6 6 18M6 6l12 12"/></g>,
    check:<path d="m5 12 4 4L19 6"/>, shield:<g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></g>,
    users:<g><circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M16 3.2a4 4 0 0 1 0 7.6M22 21v-2a4 4 0 0 0-3-3.8"/></g>,
    road:<g><path d="M8 21 10 3M16 21 14 3M12 7v2M12 13v2M12 19v2"/></g>, mail:<g><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></g>
  };
  return <svg {...c}>{p[props.name]}</svg>;
}

function Button(props:any){
  const cls=['button',props.variant?`button-${props.variant}`:'',props.className||''].filter(Boolean).join(' ');
  return props.href ? <a className={cls} href={props.href} target={props.external?'_blank':undefined} rel={props.external?'noreferrer':undefined}>{props.children}</a>
    : <button className={cls} type={props.type||'button'} onClick={props.onClick}>{props.children}</button>;
}

function Brand(){
  return <span className="brand-lockup"><img src="./assets/right-rent-car-logo.png" alt="Right Rent Car"/></span>;
}

class App extends React.Component<{},AppState>{
  lastFocused:HTMLElement|null=null;
  keyHandler:any;
  constructor(props:{}){
    super(props);
    this.state={filter:'all',expanded:false,menuOpen:false,modalOpen:false,selected:null,formSent:false,mailtoHref:'mailto:RightRentCar@gmail.com',formError:false};
    this.keyHandler=(e:KeyboardEvent)=>{ if(e.key==='Escape'&&this.state.modalOpen)this.closeModal(); };
  }
  componentDidMount(){ document.addEventListener('keydown',this.keyHandler); }
  componentWillUnmount(){ document.removeEventListener('keydown',this.keyHandler); }
  openModal=(car?:Car)=>{ this.lastFocused=document.activeElement as HTMLElement; this.setState({modalOpen:true,selected:car||null,formSent:false,formError:false,mailtoHref:'mailto:RightRentCar@gmail.com'}); };
  closeModal=()=>this.setState({modalOpen:false},()=>this.lastFocused?.focus());
  setFilter=(filter:string)=>this.setState({filter,expanded:true},()=>document.querySelector('#fleet-grid')?.scrollIntoView({behavior:'smooth',block:'start'}));
  filteredCars(){ const list=this.state.filter==='all'?CARS:CARS.filter(c=>c.category===this.state.filter); return this.state.expanded||this.state.filter!=='all'?list:list.slice(0,9); }
  submitBooking=(e:any)=>{
    e.preventDefault(); const form=e.currentTarget as HTMLFormElement; const d=new FormData(form); const name=String(d.get('name')||'').trim(); const phone=String(d.get('phone')||'').trim(); const comment=String(d.get('comment')||'').trim();
    if(!name||phone.replace(/\D/g,'').length<10){this.setState({formError:true});return;}
    const car=this.state.selected; const subject=`Заявка с сайта RightRentCar${car?` — ${car.name}`:''}`; const body=[`Имя: ${name}`,`Телефон: ${phone}`,car?`Автомобиль: ${car.name}, ${car.year}`:'',comment?`Комментарий: ${comment}`:''].filter(Boolean).join('\n');
    this.setState({formError:false,formSent:true,mailtoHref:`mailto:RightRentCar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
  };
  renderHeader(){return <>
    <div className="topline"><div className="container topline-inner"><span>Аренда автомобилей в Крыму и Сочи</span><div><a href="tel:+79788576377">+7 978 857-63-77</a><a href="mailto:RightRentCar@gmail.com">RightRentCar@gmail.com</a></div></div></div>
    <header className="site-header"><div className="container header-inner">
      <a href="#top" className="brand-link"><Brand/></a>
      <nav className={'nav '+(this.state.menuOpen?'is-open':'')} aria-label="Основная навигация">
        <a href="#fleet" onClick={()=>this.setState({menuOpen:false})}>Автопарк</a><a href="#conditions" onClick={()=>this.setState({menuOpen:false})}>Условия</a><a href="#reviews" onClick={()=>this.setState({menuOpen:false})}>Отзывы</a><a href="https://rrentcar.ru/price/" target="_blank" rel="noreferrer">Цены</a><a href="https://rrentcar.ru/kontakty/" target="_blank" rel="noreferrer">Контакты</a>
      </nav>
      <div className="header-actions"><a className="header-phone" href="tel:+79788576377"><Icon name="phone" size={17}/><span>+7 978 857-63-77</span></a><Button onClick={()=>this.openModal()} className="header-book">Забронировать</Button><button className="menu-btn" aria-label="Меню" onClick={()=>this.setState({menuOpen:!this.state.menuOpen})}><Icon name={this.state.menuOpen?'close':'menu'} size={22}/></button></div>
    </div></header>
  </>}
  renderHero(){return <section className="hero" id="top"><div className="container hero-grid">
    <div className="hero-copy"><span className="eyebrow">RIGHT RENT CAR • КРЫМ И СОЧИ</span><h1>Аренда авто<br/><em>с характером</em></h1><p>Кроссоверы, бизнес-седаны, кабриолеты и минивэны для поездок по Крыму и Сочи. Тариф, залог и основные условия видны сразу.</p><div className="hero-actions"><Button onClick={()=>document.querySelector('#fleet')?.scrollIntoView({behavior:'smooth'})}>Выбрать автомобиль <Icon name="arrow"/></Button><Button variant="secondary" href="tel:+79788576377"><Icon name="phone"/> Позвонить</Button></div><div className="hero-trust"><span><Icon name="shield" size={16}/> ОСАГО + КАСКО</span><span><Icon name="road" size={16}/> Безлимит от 3 суток</span><span><Icon name="users" size={16}/> Возраст от 23 лет</span></div></div>
    <div className="hero-visual"><div className="hero-image-wrap"><img src="https://rrentcar.ru/media/cache/2d/63/2d636eaa39f91c5d7434cfb60add80bb.jpg" alt="BMW X4 xDrive из автопарка RightRentCar"/><div className="hero-image-overlay"></div><div className="hero-badge"><small>Автопарк</small><strong>от 4 650 ₽ / сутки</strong></div></div><div className="orange-panel"><span>Крым • Сочи</span><strong>Правильная машина для правильной поездки.</strong></div></div>
  </div></section>}
  renderCard(car:Car,index:number){return <article className="car-card" key={car.name+car.year} style={{'--i':index} as any}><div className="car-media"><img src={car.image} alt={`${car.name}, ${car.year}`} loading="lazy"/><span className="year-chip">{car.year}</span>{car.badge&&<span className="badge-chip">{car.badge}</span>}</div><div className="car-body"><div className="car-title"><div><span>{car.className}</span><h3>{car.name}</h3></div><button onClick={()=>this.openModal(car)} aria-label={`Забронировать ${car.name}`}><Icon name="arrow" size={17}/></button></div><div className="specs"><span>{car.gearbox}</span><span>{car.body}</span><span>{car.drive}</span><span>{car.seats} мест</span></div><div className="price-block"><div><small>1–2 суток</small><strong>{money(car.shortPrice)}</strong><em>/сутки</em></div><div><small>10+ суток</small><strong>{money(car.longPrice)}</strong><em>/сутки</em></div></div><div className="deposit"><span>Залог</span><strong>{money(car.deposit)}</strong></div><Button onClick={()=>this.openModal(car)} className="card-button">Забронировать</Button></div></article>}
  renderFleet(){const cars=this.filteredCars();return <section className="fleet" id="fleet"><div className="container"><div className="section-heading"><div><span className="eyebrow">АВТОПАРК</span><h2>Выберите машину под поездку</h2></div><p>Выберите подходящий класс, чтобы быстрее найти машину для города, побережья, деловой поездки или большой компании.</p></div><div className="filters" role="group" aria-label="Фильтр автопарка">{FILTERS.map(([k,l])=><button key={k} className={this.state.filter===k?'active':''} onClick={()=>this.setFilter(k)}>{l}</button>)}</div><div className="fleet-grid" id="fleet-grid">{cars.length?cars.map((c,i)=>this.renderCard(c,i)):<div className="empty-state">В этой категории пока нет автомобилей.</div>}</div>{this.state.filter==='all'&&!this.state.expanded&&<div className="show-all"><Button variant="secondary" onClick={()=>this.setState({expanded:true})}>Показать весь автопарк ({CARS.length})</Button></div>}</div></section>}
  renderConditions(){return <section className="conditions" id="conditions"><div className="container conditions-grid"><div className="conditions-copy"><span className="eyebrow">УСЛОВИЯ</span><h2>Главное без мелкого шрифта</h2><p>На карточках уже видны тариф и залог. Перед бронированием можно быстро сверить основные правила аренды.</p><Button variant="secondary" href="https://rrentcar.ru/usloviya/" external>Все условия на RightRentCar <Icon name="arrow" size={16}/></Button></div><div className="conditions-list"><div><b>01</b><h3>Страхование</h3><p>Все автомобили застрахованы по ОСАГО и КАСКО.</p></div><div><b>02</b><h3>Пробег</h3><p>От 3 суток предоставляется безлимитный пробег. На 1–2 дня в тариф входит до 200 км в сутки.</p></div><div><b>03</b><h3>Возраст и стаж</h3><p>Минимальный возраст водителя 23 года, минимальный стаж 3 года. Для отдельных категорий требования выше.</p></div><div><b>04</b><h3>Оплата</h3><p>Оплата производится вперёд за весь срок аренды.</p></div></div></div></section>}
  renderReviews(){return <section className="reviews" id="reviews"><div className="container review-card"><div className="review-score"><span>5,0</span><small>рейтинг, указанный компанией на сайте</small></div><div className="review-copy"><span className="eyebrow">ОТЗЫВЫ</span><blockquote>«Все было просто, быстро и комфортно, сервис как в Европе!»</blockquote><p>Анна и Никита • отзыв на сайте RightRentCar</p><a href="https://rrentcar.ru/feedback/" target="_blank" rel="noreferrer">Посмотреть отзывы <Icon name="arrow" size={15}/></a></div></div></section>}
  renderCTA(){return <section className="cta"><div className="container cta-inner"><div><span className="eyebrow">БРОНИРОВАНИЕ</span><h2>Выберите автомобиль.<br/>Остальное уточним.</h2></div><div><Button onClick={()=>this.openModal()}>Оставить заявку <Icon name="arrow"/></Button><a href="tel:+79788576377">+7 978 857-63-77</a></div></div></section>}
  renderFooter(){return <footer className="footer"><div className="container footer-inner"><div><Brand/><p>Аренда автомобилей в Крыму и Сочи.</p></div><div><a href="#fleet">Автопарк</a><a href="#conditions">Условия</a><a href="#reviews">Отзывы</a></div><div><a href="https://rrentcar.ru/price/" target="_blank" rel="noreferrer">Цены</a><a href="https://rrentcar.ru/online-oplata/" target="_blank" rel="noreferrer">Оплата</a><a href="https://rrentcar.ru/kontakty/" target="_blank" rel="noreferrer">Контакты</a></div><div><a href="tel:+79788576377">+7 978 857-63-77</a><a href="mailto:RightRentCar@gmail.com">RightRentCar@gmail.com</a><span>ООО «Новое решение»</span></div></div><div className="container copyright">© 2014–2026 RightRentCar</div></footer>}
  renderModal(){if(!this.state.modalOpen)return null; const car=this.state.selected;return <div className="modal-backdrop" onMouseDown={(e:any)=>{if(e.target===e.currentTarget)this.closeModal()}}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={this.closeModal} aria-label="Закрыть"><Icon name="close"/></button>{!this.state.formSent?<><span className="eyebrow">БРОНИРОВАНИЕ</span><h2 id="modal-title">{car?car.name:'Подобрать автомобиль'}</h2><p>{car?`${car.year} • ${car.className} • от ${money(car.shortPrice)} в сутки`:'Оставьте контакты и пожелания по автомобилю.'}</p><form onSubmit={this.submitBooking} noValidate><label>Имя<input name="name" autoComplete="name" placeholder="Как к вам обращаться"/></label><label>Телефон<input name="phone" autoComplete="tel" inputMode="tel" placeholder="+7 999 000-00-00"/></label><label>Комментарий<textarea name="comment" placeholder="Даты и пожелания"></textarea></label>{this.state.formError&&<div className="form-error">Укажите имя и корректный номер телефона.</div>}<Button type="submit">Продолжить</Button></form></>:<div className="success"><div className="success-icon"><Icon name="check" size={26}/></div><h2 id="modal-title">Заявка подготовлена</h2><p>Откройте письмо на официальный email RightRentCar или позвоните.</p><div><Button href={this.state.mailtoHref}><Icon name="mail"/> Открыть письмо</Button><Button variant="secondary" href="tel:+79788576377"><Icon name="phone"/> Позвонить</Button></div></div>}</div></div>}
  render(){return <div>{this.renderHeader()}<main>{this.renderHero()}{this.renderFleet()}{this.renderConditions()}{this.renderReviews()}{this.renderCTA()}</main>{this.renderFooter()}{this.renderModal()}</div>}
}
ReactDOM.render(<App/>,document.getElementById('root'));
