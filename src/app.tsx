type Car = {
  name: string;
  year: string;
  className: string;
  category: string;
  body: string;
  drive: string;
  seats: number;
  gearbox: string;
  shortPrice: number;
  longPrice: number;
  deposit: number;
  badge?: string;
  image: string;
};

type AppState = {
  filter: string;
  expanded: boolean;
  menuOpen: boolean;
  modalOpen: boolean;
  selected: Car | null;
  formSent: boolean;
  mailtoHref: string;
  formError: boolean;
};

const CARS: Car[] = [
  { name: 'Audi A3 Cabrio', year: '2017', className: 'Кабриолет', category: 'cabrio', body: 'Кабриолет', drive: 'Передний', seats: 4, gearbox: 'AT7', shortPrice: 9990, longPrice: 7990, deposit: 35000, badge: 'Open air', image: 'https://rrentcar.ru/media/cache/60/54/60541d1e84475e0e8c6bc22c15b7ff18.jpg' },
  { name: 'Audi A4', year: '2019', className: 'Бизнес-средний', category: 'business', body: 'Седан', drive: 'Передний', seats: 5, gearbox: 'AT7', shortPrice: 6650, longPrice: 5490, deposit: 25000, badge: 'Отличное предложение', image: 'https://rrentcar.ru/media/cache/03/fd/03fdfa7dae8b00d07781de0418074ce7.jpg' },
  { name: 'Audi A6 New', year: '2021', className: 'Бизнес класс', category: 'business', body: 'Седан', drive: 'Полный', seats: 5, gearbox: 'АКПП', shortPrice: 12490, longPrice: 10490, deposit: 45000, badge: 'Бизнес', image: 'https://rrentcar.ru/media/cache/fb/04/fb043eaa198870def3644ea019cb4fca.jpg' },
  { name: 'VW Tiguan', year: '2019–2020', className: 'Кроссовер', category: 'suv', body: 'Кроссовер', drive: 'Полный', seats: 5, gearbox: 'АКП', shortPrice: 5490, longPrice: 4350, deposit: 20000, badge: 'Полный привод', image: 'https://rrentcar.ru/media/cache/97/cb/97cb3bd72c3c259f99ce8e005d400c9a.jpg' },
  { name: 'Audi Q3 New', year: '2020', className: 'Кроссовер', category: 'suv', body: 'Кроссовер', drive: 'Передний', seats: 5, gearbox: 'АКП', shortPrice: 6990, longPrice: 5990, deposit: 30000, image: 'https://rrentcar.ru/media/cache/0b/a6/0ba637c821596de61f754a81d04be87c.jpg' },
  { name: 'BMW X4 xDrive', year: '2021', className: 'Premium SUV', category: 'suv', body: 'Внедорожник', drive: 'Полный', seats: 5, gearbox: 'АКПП', shortPrice: 12490, longPrice: 9990, deposit: 30000, badge: 'Premium SUV', image: 'https://rrentcar.ru/media/cache/2d/63/2d636eaa39f91c5d7434cfb60add80bb.jpg' },
  { name: 'Mercedes Vito', year: '2019', className: '8 мест', category: 'family', body: 'Минивэн', drive: 'Задний', seats: 8, gearbox: '7G-Tronic', shortPrice: 11990, longPrice: 9490, deposit: 35000, badge: '8 мест', image: 'https://rrentcar.ru/media/cache/08/aa/08aa796c9e9ab4d3bce93a592ab22b8c.jpg' },
  { name: 'Kia XCeed New', year: '2020', className: 'Кросс-хетч', category: 'suv', body: 'Хэтчбэк', drive: 'Передний', seats: 5, gearbox: 'АКПП', shortPrice: 4650, longPrice: 3850, deposit: 20000, badge: 'Горячая новинка', image: 'https://rrentcar.ru/media/cache/44/dc/44dcd31de4efddd79a23ff39a6ec70e1.jpg' },
  { name: 'Tank 300', year: '2024', className: 'Внедорожник', category: 'new', body: 'Внедорожник', drive: 'Полный', seats: 5, gearbox: 'АКПП', shortPrice: 11990, longPrice: 8490, deposit: 35000, badge: 'Для дорог и направлений', image: 'https://rrentcar.ru/media/cache/75/01/75015940a04c23823a08098d3d0af0ec.jpg' },
  { name: 'BMW 520D xDrive', year: '2022', className: 'Бизнес класс', category: 'business', body: 'Седан', drive: 'Полный', seats: 5, gearbox: 'АКПП', shortPrice: 9490, longPrice: 8490, deposit: 45000, image: 'https://rrentcar.ru/media/cache/2f/8d/2f8d0373b251d6f2fb02bb9791e2905f.jpg' },
  { name: 'Skoda Karoq', year: '2021', className: 'Кроссовер', category: 'suv', body: 'Кроссовер', drive: 'Передний', seats: 5, gearbox: 'АКП', shortPrice: 5490, longPrice: 4350, deposit: 20000, image: 'https://rrentcar.ru/media/cache/b9/ba/b9ba95b7c22e709ed3c76c2570521e1d.jpg' },
  { name: 'Audi Q5 Quattro', year: '2018', className: 'Кроссовер', category: 'suv', body: 'Кроссовер', drive: 'Полный', seats: 5, gearbox: 'AT7', shortPrice: 12490, longPrice: 8490, deposit: 30000, image: 'https://rrentcar.ru/media/cache/53/52/53525cbb2efa7bd17d7699647ae9d467.jpg' },
  { name: 'Changan Deepal G318', year: '2025', className: 'Премиум гибрид', category: 'new', body: 'Внедорожник', drive: 'Полный', seats: 5, gearbox: 'АКПП', shortPrice: 15990, longPrice: 11990, deposit: 50000, badge: '2025 • Hybrid', image: 'https://rrentcar.ru/media/cache/cc/38/cc38792bbd7b6866cd2636f69384fcc4.jpg' },
  { name: 'Mercedes V-Class', year: '2020', className: 'Микроавтобус', category: 'family', body: 'Минивэн', drive: 'Полный', seats: 7, gearbox: 'АКПП', shortPrice: 18490, longPrice: 14490, deposit: 35000, badge: '7 мест', image: 'https://rrentcar.ru/media/cache/fa/ab/faab48a0f20d101833e59374770028f5.jpg' },
  { name: 'BMW 4 Cabrio', year: '2022', className: 'Кабриолет', category: 'cabrio', body: 'Кабриолет', drive: 'Задний', seats: 4, gearbox: 'АКПП', shortPrice: 19990, longPrice: 14990, deposit: 60000, badge: 'Open air', image: 'https://rrentcar.ru/media/cache/fd/53/fd5312fc3231486c9976e4b951c632f0.jpg' },
  { name: 'BMW 3er', year: '2021', className: 'Бизнес-средний', category: 'business', body: 'Седан', drive: 'Задний', seats: 5, gearbox: 'АКПП', shortPrice: 8490, longPrice: 6990, deposit: 30000, image: 'https://rrentcar.ru/media/cache/59/39/5939f8c439fd92955a2bfd535418858b.jpg' },
  { name: 'Toyota Camry', year: '2025', className: 'Бизнес класс', category: 'new', body: 'Седан', drive: 'Передний', seats: 5, gearbox: 'АКПП', shortPrice: 8490, longPrice: 6990, deposit: 40000, badge: '2025', image: 'https://rrentcar.ru/media/cache/4d/4c/4d4c825251d2e334284488702755fad6.jpg' },
  { name: 'Audi A3 Sedan', year: '2017', className: 'Бизнес-эконом', category: 'business', body: 'Седан', drive: 'Передний', seats: 5, gearbox: 'АКПП', shortPrice: 4650, longPrice: 3650, deposit: 15000, image: 'https://rrentcar.ru/media/cache/d1/f8/d1f8531ba5f7342e5a8546bf66b95386.jpg' },
  { name: 'ГАЗ-24 «Волга»', year: '1982', className: 'Ретро', category: 'retro', body: 'Седан', drive: 'Задний', seats: 5, gearbox: 'Механика', shortPrice: 9990, longPrice: 5990, deposit: 20000, badge: 'Эксклюзив', image: 'https://rrentcar.ru/media/cache/49/e8/49e8f94b2cb0271b7f7db50dfd1221d8.jpg' },
  { name: 'Voyah Free 318', year: '2025', className: 'Премиум гибрид', category: 'new', body: 'Кроссовер', drive: 'Полный', seats: 5, gearbox: 'АКПП', shortPrice: 15990, longPrice: 10490, deposit: 50000, badge: '2025 • Hybrid', image: 'https://rrentcar.ru/media/cache/9f/3b/9f3b271704030229d67706aab155de10.jpg' },
  { name: 'VW Tiguan', year: '2021', className: 'Кроссовер', category: 'suv', body: 'Кроссовер', drive: 'Передний', seats: 5, gearbox: 'АКП', shortPrice: 5850, longPrice: 4650, deposit: 20000, image: 'https://rrentcar.ru/media/cache/79/f6/79f6a2a484bc54f7b2f9e6f873ab6f18.jpg' }
];

const FILTERS = [
  ['all', 'Все'],
  ['suv', 'Кроссоверы'],
  ['business', 'Бизнес'],
  ['cabrio', 'Кабриолеты'],
  ['family', '7+ мест'],
  ['new', 'Новинки']
];

function money(value: number) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}

function Icon(props: { name: string; size?: number }) {
  const s = props.size || 18;
  const common = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
  const paths: any = {
    arrow: <g><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></g>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    phone: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></g>,
    shield: <g><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></g>,
    car: <g><path d="m5 17-1.5-4.5L6 8h12l2.5 4.5L19 17"/><path d="M5 17h14v3H5z"/><path d="M7 20v1M17 20v1M4 13h16M8 13l1-3h6l1 3"/></g>,
    users: <g><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></g>,
    route: <g><circle cx="6" cy="19" r="3"/><path d="M9 19h6.5A4.5 4.5 0 0 0 20 14.5V9"/><circle cx="20" cy="5" r="3"/><path d="M17 5H9.5A4.5 4.5 0 0 0 5 9.5V16"/></g>,
    menu: <g><path d="M4 7h16M4 12h16M4 17h16"/></g>,
    close: <g><path d="M18 6 6 18M6 6l12 12"/></g>,
    mail: <g><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></g>,
    check: <path d="m5 12 4 4L19 6"/>
  };
  return <svg {...common}>{paths[props.name]}</svg>;
}

function Button(props: any) {
  const cls = ['button', props.variant === 'ghost' ? 'button-ghost' : '', props.variant === 'outline' ? 'button-outline' : '', props.className || ''].filter(Boolean).join(' ');
  if (props.href) {
    return <a className={cls} href={props.href} target={props.external ? '_blank' : undefined} rel={props.external ? 'noreferrer' : undefined} aria-label={props['aria-label']}>{props.children}</a>;
  }
  return <button className={cls} type={props.type || 'button'} onClick={props.onClick} aria-label={props['aria-label']} disabled={props.disabled}>{props.children}</button>;
}

function FeaturePill(props: { icon: string; label: string }) {
  return <span className="feature-pill"><Icon name={props.icon} size={15}/>{props.label}</span>;
}

class App extends React.Component<{}, AppState> {
  escHandler: any;
  lastFocused: HTMLElement | null;

  constructor(props: {}) {
    super(props);
    this.state = { filter: 'all', expanded: false, menuOpen: false, modalOpen: false, selected: null, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false };
    this.lastFocused = null;
    this.escHandler = (event: KeyboardEvent) => {
      if (!this.state.modalOpen) return;
      if (event.key === 'Escape') {
        this.closeModal();
        return;
      }
      if (event.key === 'Tab') {
        const modal = document.querySelector('.modal') as HTMLElement | null;
        if (!modal) return;
        const focusable = Array.from(modal.querySelectorAll<HTMLElement>('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute('disabled'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escHandler);
    this.setupReveal();
    this.setupSpotlight();
    this.setupHeroParallax();
  }

  componentDidUpdate(_: {}, prevState: AppState) {
    if (prevState.modalOpen !== this.state.modalOpen) {
      document.body.classList.toggle('modal-open', this.state.modalOpen);
      if (this.state.modalOpen) setTimeout(() => (document.querySelector('.modal-close') as HTMLElement | null)?.focus(), 30);
    }
    if (prevState.filter !== this.state.filter || prevState.expanded !== this.state.expanded) {
      setTimeout(() => this.setupSpotlight(), 0);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escHandler);
  }

  setupReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }

  setupSpotlight() {
    const grid = document.querySelector('.fleet-grid') as HTMLElement | null;
    if (!grid || window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    grid.onpointermove = (event: PointerEvent) => {
      const cards = grid.querySelectorAll('.car-card');
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      });
    };
  }

  setupHeroParallax() {
    const hero = document.querySelector('.hero-stage') as HTMLElement | null;
    if (!hero || window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hero.addEventListener('pointermove', (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      hero.style.setProperty('--px', `${x * 16}px`);
      hero.style.setProperty('--py', `${y * 10}px`);
      hero.style.setProperty('--hx', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--hy', `${event.clientY - rect.top}px`);
    });
  }

  openModal = (car?: Car) => {
    this.lastFocused = document.activeElement as HTMLElement | null;
    this.setState({ modalOpen: true, selected: car || null, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false }, () => this.lastFocused?.focus());
  };

  submitBooking = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const comment = String(data.get('comment') || '').trim();
    if (!name || phone.replace(/\D/g, '').length < 10) {
      form.classList.add('has-errors');
      this.setState({ formError: true });
      (form.querySelector('input[name="name"]') as HTMLInputElement | null)?.focus();
      return;
    }
    form.classList.remove('has-errors');
    this.setState({ formError: false });
    const subject = `Заявка с сайта RightRentCar${this.state.selected ? ` — ${this.state.selected.name}` : ''}`;
    const body = [
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      this.state.selected ? `Автомобиль: ${this.state.selected.name}, ${this.state.selected.year}` : '',
      comment ? `Комментарий: ${comment}` : ''
    ].filter(Boolean).join('\n');
    const mailtoHref = `mailto:RightRentCar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.setState({ formSent: true, mailtoHref });
  };

  renderHeader() {
    return <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="RightRentCar — к началу страницы">
          <span className="brand-mark">R</span>
          <span className="brand-copy"><strong>RightRentCar</strong><small>Крым • Сочи</small></span>
        </a>
        <nav className={'nav ' + (this.state.menuOpen ? 'is-open' : '')} aria-label="Основная навигация">
          <a href="#fleet" onClick={() => this.setState({ menuOpen: false })}>Автопарк</a>
          <a href="#benefits" onClick={() => this.setState({ menuOpen: false })}>Условия</a>
          <a href="#reviews" onClick={() => this.setState({ menuOpen: false })}>Отзывы</a>
          <a href="https://rrentcar.ru/price/" target="_blank" rel="noreferrer">Цены</a>
          <a href="https://rrentcar.ru/kontakty/" target="_blank" rel="noreferrer">Контакты</a>
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:+79788576377"><Icon name="phone" size={16}/><span>+7 978 857-63-77</span></a>
          <Button onClick={() => this.openModal()} className="header-cta">Забронировать</Button>
          <button className="menu-button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} aria-label={this.state.menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={this.state.menuOpen}>
            <Icon name={this.state.menuOpen ? 'close' : 'menu'} size={22}/>
          </button>
        </div>
      </div>
    </header>;
  }

  renderHero() {
    return <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-dot"></span>Автопарк RightRentCar</div>
          <h1>Машина должна быть частью <span>впечатления.</span></h1>
          <p className="hero-lead">Бизнес-седаны, кроссоверы, кабриолеты и минивэны. Выбирайте по характеру поездки, а не по бесконечной таблице характеристик.</p>
          <div className="hero-actions">
            <Button onClick={() => document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' })}>Выбрать автомобиль <Icon name="arrow"/></Button>
            <Button variant="ghost" href="tel:+79788576377"><Icon name="phone"/> Позвонить</Button>
          </div>
          <div className="hero-facts" aria-label="Ключевые условия">
            <FeaturePill icon="shield" label="ОСАГО + КАСКО"/>
            <FeaturePill icon="route" label="Безлимит от 3 суток"/>
            <FeaturePill icon="users" label="Возраст от 23 лет"/>
          </div>
        </div>
        <div className="hero-stage" data-reveal aria-label="Автомобиль RightRentCar">
          <div className="hero-glow"></div>
          <div className="hero-microcopy"><span>01</span><em>DRIVE MODE</em></div>
          <img src="./assets/hero-car.svg" alt="Силуэт автомобиля" className="hero-car"/>
          <div className="road-grid" aria-hidden="true"></div>
          <div className="hero-card mini-card">
            <span>Старт аренды</span>
            <strong>от 4 650 ₽</strong>
            <small>1–2 суток • по данным текущего автопарка</small>
          </div>
          <div className="hero-card meta-card">
            <span>Крым • Сочи</span>
            <small>RightRentCar</small>
          </div>
        </div>
      </div>
      <div className="container hero-bottomline"><span>SCROLL TO EXPLORE</span><i></i><span>2014 — 2026</span></div>
    </section>;
  }

  filteredCars() {
    const filtered = this.state.filter === 'all' ? CARS : CARS.filter(car => car.category === this.state.filter);
    return this.state.expanded || this.state.filter !== 'all' ? filtered : filtered.slice(0, 8);
  }

  renderCarCard(car: Car, index: number) {
    const initials = car.name.replace(/[^A-Za-zА-Яа-я0-9 ]/g, '').split(' ').slice(0, 2).map(x => x[0]).join('');
    return <article className="car-card" key={car.name + car.year} data-reveal style={{ '--delay': `${Math.min(index * 40, 240)}ms` } as any}>
      <div className="car-media">
        <div className="car-fallback" aria-hidden="true"><span>{initials}</span><img src="./assets/hero-car.svg" alt=""/></div>
        <img className="car-photo" src={car.image} alt={`${car.name}, ${car.year}`} loading="lazy" onError={(e: any) => e.currentTarget.classList.add('is-broken')}/>
        <div className="car-shade"></div>
        <span className="year-chip">{car.year}</span>
        {car.badge && <span className="accent-chip">{car.badge}</span>}
      </div>
      <div className="car-content">
        <div className="car-heading"><div><span className="car-class">{car.className}</span><h3>{car.name}</h3></div><button className="icon-button" onClick={() => this.openModal(car)} aria-label={`Забронировать ${car.name}`}><Icon name="arrow" size={18}/></button></div>
        <div className="spec-row"><span>{car.gearbox}</span><i></i><span>{car.body}</span><i></i><span>{car.drive}</span><i></i><span>{car.seats} мест</span></div>
        <div className="price-row">
          <div><small>1–2 суток</small><strong>{money(car.shortPrice)}<em>/сутки</em></strong></div>
          <div><small>10+ суток</small><strong>{money(car.longPrice)}<em>/сутки</em></strong></div>
        </div>
        <div className="deposit-row"><span>Залог</span><strong>{money(car.deposit)}</strong></div>
        <Button onClick={() => this.openModal(car)} className="card-cta">Забронировать <Icon name="arrow" size={16}/></Button>
      </div>
    </article>;
  }

  renderFleet() {
    const cars = this.filteredCars();
    return <section className="fleet section" id="fleet">
      <div className="container">
        <div className="section-head" data-reveal>
          <div><span className="kicker">Автопарк</span><h2>Выберите характер поездки</h2></div>
          <p>Фильтры оставляют на экране только те машины, которые подходят под сценарий. Цены ниже перенесены с актуальных страниц RightRentCar.</p>
        </div>
        <div className="filter-bar" data-reveal role="group" aria-label="Фильтр автопарка">
          {FILTERS.map(([key, label]) => <button key={key} className={this.state.filter === key ? 'is-active' : ''} onClick={() => this.setState({ filter: key, expanded: true })}>{label}</button>)}
        </div>
        <div className="fleet-grid">
          {cars.map((car, i) => this.renderCarCard(car, i))}
        </div>
        {this.state.filter === 'all' && !this.state.expanded && <div className="center-action" data-reveal><Button variant="outline" onClick={() => this.setState({ expanded: true })}>Показать все автомобили <span className="count-chip">{CARS.length}</span></Button></div>}
      </div>
    </section>;
  }

  renderBenefits() {
    const benefits = [
      { n: '01', title: 'Страхование', text: 'Все автомобили застрахованы по ОСАГО и КАСКО. Условия франшизы зависят от класса автомобиля.' },
      { n: '02', title: 'Пробег', text: 'От 3 суток — безлимитный пробег. Для аренды на 1–2 дня в тариф включено до 200 км в сутки.' },
      { n: '03', title: 'Документы', text: 'Для физического лица нужны паспорт и водительское удостоверение. Минимальный возраст — 23 года.' },
      { n: '04', title: 'Депозит', text: 'Размер депозита указан в карточке автомобиля и возвращается при соблюдении условий договора.' }
    ];
    return <section className="benefits section" id="benefits">
      <div className="container">
        <div className="benefits-panel" data-reveal>
          <div className="benefit-intro">
            <span className="kicker">Перед поездкой</span>
            <h2>Ключевые условия аренды</h2>
            <p>Здесь собраны основные правила. Полная формулировка и дополнительные условия доступны на странице RightRentCar.</p>
            <Button variant="outline" href="https://rrentcar.ru/usloviya/" external>Все условия <Icon name="arrow" size={16}/></Button>
          </div>
          <div className="benefit-list">
            {benefits.map(item => <div className="benefit-item" key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </div>
    </section>;
  }

  renderStory() {
    return <section className="story section" id="reviews">
      <div className="container story-grid">
        <div className="story-visual" data-reveal>
          <div className="story-orbit"></div>
          <div className="story-number">5.0</div>
          <p>Рейтинг, который компания указывает на своем сайте</p>
          <a href="https://rrentcar.ru/feedback/" target="_blank" rel="noreferrer">Смотреть отзывы <Icon name="arrow" size={15}/></a>
        </div>
        <div className="story-copy" data-reveal>
          <span className="kicker">Отзывы путешественников</span>
          <blockquote>«Все было просто, быстро и комфортно, сервис как в Европе!»</blockquote>
          <div className="quote-meta"><strong>Анна и Никита</strong><span>отзыв на сайте RightRentCar</span></div>
          <p className="story-text">В отзывах чаще всего повторяются три вещи: состояние машин, скорость выдачи и возможность путешествовать по полуострову без привязки к общественному транспорту.</p>
        </div>
      </div>
    </section>;
  }

  renderCTA() {
    return <section className="cta-section section" data-reveal>
      <div className="container">
        <div className="cta-panel">
          <div><span className="kicker">Готовы ехать?</span><h2>Выберите машину. Остальное уточним.</h2><p>Оставьте контакты или позвоните по номеру, указанному на действующем сайте RightRentCar.</p></div>
          <div className="cta-actions"><Button onClick={() => this.openModal()}>Оставить заявку <Icon name="arrow"/></Button><a href="tel:+79788576377">+7 978 857-63-77</a></div>
        </div>
      </div>
    </section>;
  }

  renderFooter() {
    return <footer className="footer">
      <div className="container footer-grid">
        <div><a className="brand footer-brand" href="#top"><span className="brand-mark">R</span><span className="brand-copy"><strong>RightRentCar</strong><small>Крым • Сочи</small></span></a><p>Аренда автомобилей в Крыму и Сочи.</p></div>
        <div><strong>Навигация</strong><a href="#fleet">Автопарк</a><a href="#benefits">Условия</a><a href="#reviews">Отзывы</a></div>
        <div><strong>На сайте</strong><a href="https://rrentcar.ru/price/" target="_blank" rel="noreferrer">Цены</a><a href="https://rrentcar.ru/online-oplata/" target="_blank" rel="noreferrer">Онлайн-оплата</a><a href="https://rrentcar.ru/kontakty/" target="_blank" rel="noreferrer">Контакты</a></div>
        <div><strong>Связь</strong><a href="tel:+79788576377">+7 978 857-63-77</a><a href="mailto:RightRentCar@gmail.com">RightRentCar@gmail.com</a><span>ООО «Новое решение»</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2014–2026 RightRentCar</span><span>RightRentCar</span></div>
    </footer>;
  }

  renderModal() {
    if (!this.state.modalOpen) return null;
    const car = this.state.selected;
    return <div className="modal-backdrop" role="presentation" onMouseDown={(e: any) => { if (e.target === e.currentTarget) this.closeModal(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" onClick={this.closeModal} aria-label="Закрыть форму"><Icon name="close" size={20}/></button>
        {!this.state.formSent ? <div className="booking-form-wrap">
          <span className="kicker">Бронирование</span>
          <h2 id="booking-title">{car ? car.name : 'Подобрать автомобиль'}</h2>
          <p>{car ? `${car.year} • ${car.className} • от ${money(car.shortPrice)} в сутки` : 'Оставьте контакты и укажите даты или пожелания к автомобилю.'}</p>
          <form onSubmit={this.submitBooking} noValidate>
            <label>Как к вам обращаться<input name="name" required autoComplete="name" placeholder="Имя" aria-invalid={this.state.formError || undefined}/></label>
            <label>Телефон<input name="phone" required autoComplete="tel" inputMode="tel" placeholder="+7 999 000-00-00" aria-invalid={this.state.formError || undefined}/></label>
            <label>Комментарий<textarea name="comment" placeholder={car ? `Например: ${car.name}, с 12 по 17 октября` : 'Даты, класс автомобиля, пожелания'}></textarea></label>
            {this.state.formError && <div className="form-error" role="alert">Заполните имя и укажите корректный номер телефона.</div>}
            <div className="form-note">После проверки откроется готовое письмо на официальный email RightRentCar. Данные не отправляются сторонним сервисам.</div>
            <Button type="submit">Продолжить <Icon name="arrow" size={16}/></Button>
          </form>
        </div> : <div className="form-success" aria-live="polite">
          <div className="success-icon"><Icon name="check" size={28}/></div>
          <span className="kicker">Заявка готова</span>
          <h2 id="booking-title">Выберите удобный способ связи</h2>
          <p>Откройте подготовленное письмо или позвоните в RightRentCar.</p>
          <div className="success-actions"><Button href={this.state.mailtoHref}><Icon name="mail"/> Открыть письмо</Button><Button variant="outline" href="tel:+79788576377"><Icon name="phone"/> Позвонить</Button></div>
        </div>}
      </div>
    </div>;
  }

  render() {
    return <div className="site-shell">
      {this.renderHeader()}
      <main>{this.renderHero()}{this.renderFleet()}{this.renderBenefits()}{this.renderStory()}{this.renderCTA()}</main>
      {this.renderFooter()}
      {this.renderModal()}
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
