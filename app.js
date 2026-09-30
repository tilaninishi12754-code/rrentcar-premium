const CARS = [
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
function money(value) {
    return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}
function Icon(props) {
    const s = props.size || 18;
    const common = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
    const paths = {
        arrow: React.createElement("g", null,
            React.createElement("path", { d: "M5 12h14" }),
            React.createElement("path", { d: "m13 6 6 6-6 6" })),
        chevron: React.createElement("path", { d: "m9 18 6-6-6-6" }),
        phone: React.createElement("g", null,
            React.createElement("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" })),
        shield: React.createElement("g", null,
            React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
            React.createElement("path", { d: "m9 12 2 2 4-4" })),
        car: React.createElement("g", null,
            React.createElement("path", { d: "m5 17-1.5-4.5L6 8h12l2.5 4.5L19 17" }),
            React.createElement("path", { d: "M5 17h14v3H5z" }),
            React.createElement("path", { d: "M7 20v1M17 20v1M4 13h16M8 13l1-3h6l1 3" })),
        users: React.createElement("g", null,
            React.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
            React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
            React.createElement("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })),
        route: React.createElement("g", null,
            React.createElement("circle", { cx: "6", cy: "19", r: "3" }),
            React.createElement("path", { d: "M9 19h6.5A4.5 4.5 0 0 0 20 14.5V9" }),
            React.createElement("circle", { cx: "20", cy: "5", r: "3" }),
            React.createElement("path", { d: "M17 5H9.5A4.5 4.5 0 0 0 5 9.5V16" })),
        menu: React.createElement("g", null,
            React.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" })),
        close: React.createElement("g", null,
            React.createElement("path", { d: "M18 6 6 18M6 6l12 12" })),
        mail: React.createElement("g", null,
            React.createElement("path", { d: "M4 4h16v16H4z" }),
            React.createElement("path", { d: "m4 6 8 7 8-7" })),
        check: React.createElement("path", { d: "m5 12 4 4L19 6" })
    };
    return React.createElement("svg", { ...common }, paths[props.name]);
}
function Button(props) {
    const cls = ['button', props.variant === 'ghost' ? 'button-ghost' : '', props.variant === 'outline' ? 'button-outline' : '', props.className || ''].filter(Boolean).join(' ');
    if (props.href) {
        return React.createElement("a", { className: cls, href: props.href, target: props.external ? '_blank' : undefined, rel: props.external ? 'noreferrer' : undefined, "aria-label": props['aria-label'] }, props.children);
    }
    return React.createElement("button", { className: cls, type: props.type || 'button', onClick: props.onClick, "aria-label": props['aria-label'], disabled: props.disabled }, props.children);
}
function FeaturePill(props) {
    return React.createElement("span", { className: "feature-pill" },
        React.createElement(Icon, { name: props.icon, size: 15 }),
        props.label);
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = (car) => {
            this.lastFocused = document.activeElement;
            this.setState({ modalOpen: true, selected: car || null, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false });
        };
        this.closeModal = () => {
            this.setState({ modalOpen: false, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false }, () => { var _a; return (_a = this.lastFocused) === null || _a === void 0 ? void 0 : _a.focus(); });
        };
        this.submitBooking = (event) => {
            var _a;
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const name = String(data.get('name') || '').trim();
            const phone = String(data.get('phone') || '').trim();
            const comment = String(data.get('comment') || '').trim();
            if (!name || phone.replace(/\D/g, '').length < 10) {
                form.classList.add('has-errors');
                this.setState({ formError: true });
                (_a = form.querySelector('input[name="name"]')) === null || _a === void 0 ? void 0 : _a.focus();
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
        this.state = { filter: 'all', expanded: false, menuOpen: false, modalOpen: false, selected: null, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false };
        this.lastFocused = null;
        this.escHandler = (event) => {
            if (!this.state.modalOpen)
                return;
            if (event.key === 'Escape') {
                this.closeModal();
                return;
            }
            if (event.key === 'Tab') {
                const modal = document.querySelector('.modal');
                if (!modal)
                    return;
                const focusable = Array.from(modal.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')).filter(el => !el.hasAttribute('disabled'));
                if (!focusable.length)
                    return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                }
                else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', this.escHandler);
        this.setupReveal();
        this.setupSpotlight();
        this.setupHeroParallax();
    }
    componentDidUpdate(_, prevState) {
        if (prevState.modalOpen !== this.state.modalOpen) {
            document.body.classList.toggle('modal-open', this.state.modalOpen);
            if (this.state.modalOpen)
                setTimeout(() => { var _a; return (_a = document.querySelector('.modal-close')) === null || _a === void 0 ? void 0 : _a.focus(); }, 30);
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
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    }
    setupSpotlight() {
        const grid = document.querySelector('.fleet-grid');
        if (!grid || window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        grid.onpointermove = (event) => {
            const cards = grid.querySelectorAll('.car-card');
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
                card.style.setProperty('--my', `${event.clientY - rect.top}px`);
            });
        };
    }
    setupHeroParallax() {
        const hero = document.querySelector('.hero-stage');
        if (!hero || window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        hero.addEventListener('pointermove', (event) => {
            const rect = hero.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;
            hero.style.setProperty('--px', `${x * 16}px`);
            hero.style.setProperty('--py', `${y * 10}px`);
            hero.style.setProperty('--hx', `${event.clientX - rect.left}px`);
            hero.style.setProperty('--hy', `${event.clientY - rect.top}px`);
        });
    }
    renderHeader() {
        return React.createElement("header", { className: "site-header" },
            React.createElement("div", { className: "container header-inner" },
                React.createElement("a", { className: "brand", href: "#top", "aria-label": "RightRentCar \u2014 \u043A \u043D\u0430\u0447\u0430\u043B\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B" },
                    React.createElement("span", { className: "brand-mark" }, "R"),
                    React.createElement("span", { className: "brand-copy" },
                        React.createElement("strong", null, "RightRentCar"),
                        React.createElement("small", null, "\u041A\u0440\u044B\u043C \u2022 \u0421\u043E\u0447\u0438"))),
                React.createElement("nav", { className: 'nav ' + (this.state.menuOpen ? 'is-open' : ''), "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F" },
                    React.createElement("a", { href: "#fleet", onClick: () => this.setState({ menuOpen: false }) }, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A"),
                    React.createElement("a", { href: "#benefits", onClick: () => this.setState({ menuOpen: false }) }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F"),
                    React.createElement("a", { href: "#reviews", onClick: () => this.setState({ menuOpen: false }) }, "\u041E\u0442\u0437\u044B\u0432\u044B"),
                    React.createElement("a", { href: "https://rrentcar.ru/price/", target: "_blank", rel: "noreferrer" }, "\u0426\u0435\u043D\u044B"),
                    React.createElement("a", { href: "https://rrentcar.ru/kontakty/", target: "_blank", rel: "noreferrer" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                React.createElement("div", { className: "header-actions" },
                    React.createElement("a", { className: "phone-link", href: "tel:+79788576377" },
                        React.createElement(Icon, { name: "phone", size: 16 }),
                        React.createElement("span", null, "+7 978 857-63-77")),
                    React.createElement(Button, { onClick: () => this.openModal(), className: "header-cta" }, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
                    React.createElement("button", { className: "menu-button", onClick: () => this.setState({ menuOpen: !this.state.menuOpen }), "aria-label": this.state.menuOpen ? 'Закрыть меню' : 'Открыть меню', "aria-expanded": this.state.menuOpen },
                        React.createElement(Icon, { name: this.state.menuOpen ? 'close' : 'menu', size: 22 })))));
    }
    renderHero() {
        return React.createElement("section", { className: "hero", id: "top" },
            React.createElement("div", { className: "container hero-grid" },
                React.createElement("div", { className: "hero-copy", "data-reveal": true },
                    React.createElement("div", { className: "eyebrow" },
                        React.createElement("span", { className: "eyebrow-dot" }),
                        "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A RightRentCar"),
                    React.createElement("h1", null,
                        "\u041C\u0430\u0448\u0438\u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0447\u0430\u0441\u0442\u044C\u044E ",
                        React.createElement("span", null, "\u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F.")),
                    React.createElement("p", { className: "hero-lead" }, "\u0411\u0438\u0437\u043D\u0435\u0441-\u0441\u0435\u0434\u0430\u043D\u044B, \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440\u044B, \u043A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442\u044B \u0438 \u043C\u0438\u043D\u0438\u0432\u044D\u043D\u044B. \u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043F\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0443 \u043F\u043E\u0435\u0437\u0434\u043A\u0438, \u0430 \u043D\u0435 \u043F\u043E \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A."),
                    React.createElement("div", { className: "hero-actions" },
                        React.createElement(Button, { onClick: () => { var _a; return (_a = document.querySelector('#fleet')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' }); } },
                            "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C ",
                            React.createElement(Icon, { name: "arrow" })),
                        React.createElement(Button, { variant: "ghost", href: "tel:+79788576377" },
                            React.createElement(Icon, { name: "phone" }),
                            " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")),
                    React.createElement("div", { className: "hero-facts", "aria-label": "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F" },
                        React.createElement(FeaturePill, { icon: "shield", label: "\u041E\u0421\u0410\u0413\u041E + \u041A\u0410\u0421\u041A\u041E" }),
                        React.createElement(FeaturePill, { icon: "route", label: "\u0411\u0435\u0437\u043B\u0438\u043C\u0438\u0442 \u043E\u0442 3 \u0441\u0443\u0442\u043E\u043A" }),
                        React.createElement(FeaturePill, { icon: "users", label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043E\u0442 23 \u043B\u0435\u0442" }))),
                React.createElement("div", { className: "hero-stage", "data-reveal": true, "aria-label": "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C RightRentCar" },
                    React.createElement("div", { className: "hero-glow" }),
                    React.createElement("div", { className: "hero-microcopy" },
                        React.createElement("span", null, "01"),
                        React.createElement("em", null, "DRIVE MODE")),
                    React.createElement("img", { src: "./assets/hero-car.svg", alt: "\u0421\u0438\u043B\u0443\u044D\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F", className: "hero-car" }),
                    React.createElement("div", { className: "road-grid", "aria-hidden": "true" }),
                    React.createElement("div", { className: "hero-card mini-card" },
                        React.createElement("span", null, "\u0421\u0442\u0430\u0440\u0442 \u0430\u0440\u0435\u043D\u0434\u044B"),
                        React.createElement("strong", null, "\u043E\u0442 4 650 \u20BD"),
                        React.createElement("small", null, "1\u20132 \u0441\u0443\u0442\u043E\u043A \u2022 \u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0430")),
                    React.createElement("div", { className: "hero-card meta-card" },
                        React.createElement("span", null, "\u041A\u0440\u044B\u043C \u2022 \u0421\u043E\u0447\u0438"),
                        React.createElement("small", null, "RightRentCar")))),
            React.createElement("div", { className: "container hero-bottomline" },
                React.createElement("span", null, "SCROLL TO EXPLORE"),
                React.createElement("i", null),
                React.createElement("span", null, "2014 \u2014 2026")));
    }
    filteredCars() {
        const filtered = this.state.filter === 'all' ? CARS : CARS.filter(car => car.category === this.state.filter);
        return this.state.expanded || this.state.filter !== 'all' ? filtered : filtered.slice(0, 8);
    }
    renderCarCard(car, index) {
        const initials = car.name.replace(/[^A-Za-zА-Яа-я0-9 ]/g, '').split(' ').slice(0, 2).map(x => x[0]).join('');
        return React.createElement("article", { className: "car-card", key: car.name + car.year, "data-reveal": true, style: { '--delay': `${Math.min(index * 40, 240)}ms` } },
            React.createElement("div", { className: "car-media" },
                React.createElement("div", { className: "car-fallback", "aria-hidden": "true" },
                    React.createElement("span", null, initials),
                    React.createElement("img", { src: "./assets/hero-car.svg", alt: "" })),
                React.createElement("img", { className: "car-photo", src: car.image, alt: `${car.name}, ${car.year}`, loading: "lazy", onError: (e) => e.currentTarget.classList.add('is-broken') }),
                React.createElement("div", { className: "car-shade" }),
                React.createElement("span", { className: "year-chip" }, car.year),
                car.badge && React.createElement("span", { className: "accent-chip" }, car.badge)),
            React.createElement("div", { className: "car-content" },
                React.createElement("div", { className: "car-heading" },
                    React.createElement("div", null,
                        React.createElement("span", { className: "car-class" }, car.className),
                        React.createElement("h3", null, car.name)),
                    React.createElement("button", { className: "icon-button", onClick: () => this.openModal(car), "aria-label": `Забронировать ${car.name}` },
                        React.createElement(Icon, { name: "arrow", size: 18 }))),
                React.createElement("div", { className: "spec-row" },
                    React.createElement("span", null, car.gearbox),
                    React.createElement("i", null),
                    React.createElement("span", null, car.body),
                    React.createElement("i", null),
                    React.createElement("span", null, car.drive),
                    React.createElement("i", null),
                    React.createElement("span", null,
                        car.seats,
                        " \u043C\u0435\u0441\u0442")),
                React.createElement("div", { className: "price-row" },
                    React.createElement("div", null,
                        React.createElement("small", null, "1\u20132 \u0441\u0443\u0442\u043E\u043A"),
                        React.createElement("strong", null,
                            money(car.shortPrice),
                            React.createElement("em", null, "/\u0441\u0443\u0442\u043A\u0438"))),
                    React.createElement("div", null,
                        React.createElement("small", null, "10+ \u0441\u0443\u0442\u043E\u043A"),
                        React.createElement("strong", null,
                            money(car.longPrice),
                            React.createElement("em", null, "/\u0441\u0443\u0442\u043A\u0438")))),
                React.createElement("div", { className: "deposit-row" },
                    React.createElement("span", null, "\u0417\u0430\u043B\u043E\u0433"),
                    React.createElement("strong", null, money(car.deposit))),
                React.createElement(Button, { onClick: () => this.openModal(car), className: "card-cta" },
                    "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C ",
                    React.createElement(Icon, { name: "arrow", size: 16 }))));
    }
    renderFleet() {
        const cars = this.filteredCars();
        return React.createElement("section", { className: "fleet section", id: "fleet" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "section-head", "data-reveal": true },
                    React.createElement("div", null,
                        React.createElement("span", { className: "kicker" }, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A"),
                        React.createElement("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u043F\u043E\u0435\u0437\u0434\u043A\u0438")),
                    React.createElement("p", null, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435 \u043C\u0430\u0448\u0438\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u043F\u043E\u0434 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439. \u0426\u0435\u043D\u044B \u043D\u0438\u0436\u0435 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B \u0441 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 RightRentCar.")),
                React.createElement("div", { className: "filter-bar", "data-reveal": true, role: "group", "aria-label": "\u0424\u0438\u043B\u044C\u0442\u0440 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0430" }, FILTERS.map(([key, label]) => React.createElement("button", { key: key, className: this.state.filter === key ? 'is-active' : '', onClick: () => this.setState({ filter: key, expanded: true }) }, label))),
                React.createElement("div", { className: "fleet-grid" }, cars.map((car, i) => this.renderCarCard(car, i))),
                this.state.filter === 'all' && !this.state.expanded && React.createElement("div", { className: "center-action", "data-reveal": true },
                    React.createElement(Button, { variant: "outline", onClick: () => this.setState({ expanded: true }) },
                        "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438 ",
                        React.createElement("span", { className: "count-chip" }, CARS.length)))));
    }
    renderBenefits() {
        const benefits = [
            { n: '01', title: 'Страхование', text: 'Все автомобили застрахованы по ОСАГО и КАСКО. Условия франшизы зависят от класса автомобиля.' },
            { n: '02', title: 'Пробег', text: 'От 3 суток — безлимитный пробег. Для аренды на 1–2 дня в тариф включено до 200 км в сутки.' },
            { n: '03', title: 'Документы', text: 'Для физического лица нужны паспорт и водительское удостоверение. Минимальный возраст — 23 года.' },
            { n: '04', title: 'Депозит', text: 'Размер депозита указан в карточке автомобиля и возвращается при соблюдении условий договора.' }
        ];
        return React.createElement("section", { className: "benefits section", id: "benefits" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "benefits-panel", "data-reveal": true },
                    React.createElement("div", { className: "benefit-intro" },
                        React.createElement("span", { className: "kicker" }, "\u041F\u0435\u0440\u0435\u0434 \u043F\u043E\u0435\u0437\u0434\u043A\u043E\u0439"),
                        React.createElement("h2", null, "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u0440\u0435\u043D\u0434\u044B"),
                        React.createElement("p", null, "\u0417\u0434\u0435\u0441\u044C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430. \u041F\u043E\u043B\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430 \u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 RightRentCar."),
                        React.createElement(Button, { variant: "outline", href: "https://rrentcar.ru/usloviya/", external: true },
                            "\u0412\u0441\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F ",
                            React.createElement(Icon, { name: "arrow", size: 16 }))),
                    React.createElement("div", { className: "benefit-list" }, benefits.map(item => React.createElement("div", { className: "benefit-item", key: item.n },
                        React.createElement("span", null, item.n),
                        React.createElement("div", null,
                            React.createElement("h3", null, item.title),
                            React.createElement("p", null, item.text))))))));
    }
    renderStory() {
        return React.createElement("section", { className: "story section", id: "reviews" },
            React.createElement("div", { className: "container story-grid" },
                React.createElement("div", { className: "story-visual", "data-reveal": true },
                    React.createElement("div", { className: "story-orbit" }),
                    React.createElement("div", { className: "story-number" }, "5.0"),
                    React.createElement("p", null, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u0441\u0432\u043E\u0435\u043C \u0441\u0430\u0439\u0442\u0435"),
                    React.createElement("a", { href: "https://rrentcar.ru/feedback/", target: "_blank", rel: "noreferrer" },
                        "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B ",
                        React.createElement(Icon, { name: "arrow", size: 15 }))),
                React.createElement("div", { className: "story-copy", "data-reveal": true },
                    React.createElement("span", { className: "kicker" }, "\u041E\u0442\u0437\u044B\u0432\u044B \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432"),
                    React.createElement("blockquote", null, "\u00AB\u0412\u0441\u0435 \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0441\u0442\u043E, \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E, \u0441\u0435\u0440\u0432\u0438\u0441 \u043A\u0430\u043A \u0432 \u0415\u0432\u0440\u043E\u043F\u0435!\u00BB"),
                    React.createElement("div", { className: "quote-meta" },
                        React.createElement("strong", null, "\u0410\u043D\u043D\u0430 \u0438 \u041D\u0438\u043A\u0438\u0442\u0430"),
                        React.createElement("span", null, "\u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 RightRentCar")),
                    React.createElement("p", { className: "story-text" }, "\u0412 \u043E\u0442\u0437\u044B\u0432\u0430\u0445 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0442\u0441\u044F \u0442\u0440\u0438 \u0432\u0435\u0449\u0438: \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0430\u0448\u0438\u043D, \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u044B\u0434\u0430\u0447\u0438 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u043F\u043E\u043B\u0443\u043E\u0441\u0442\u0440\u043E\u0432\u0443 \u0431\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443."))));
    }
    renderCTA() {
        return React.createElement("section", { className: "cta-section section", "data-reveal": true },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "cta-panel" },
                    React.createElement("div", null,
                        React.createElement("span", { className: "kicker" }, "\u0413\u043E\u0442\u043E\u0432\u044B \u0435\u0445\u0430\u0442\u044C?"),
                        React.createElement("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0430\u0448\u0438\u043D\u0443. \u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u043C."),
                        React.createElement("p", null, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u043D\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C \u0441\u0430\u0439\u0442\u0435 RightRentCar.")),
                    React.createElement("div", { className: "cta-actions" },
                        React.createElement(Button, { onClick: () => this.openModal() },
                            "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ",
                            React.createElement(Icon, { name: "arrow" })),
                        React.createElement("a", { href: "tel:+79788576377" }, "+7 978 857-63-77")))));
    }
    renderFooter() {
        return React.createElement("footer", { className: "footer" },
            React.createElement("div", { className: "container footer-grid" },
                React.createElement("div", null,
                    React.createElement("a", { className: "brand footer-brand", href: "#top" },
                        React.createElement("span", { className: "brand-mark" }, "R"),
                        React.createElement("span", { className: "brand-copy" },
                            React.createElement("strong", null, "RightRentCar"),
                            React.createElement("small", null, "\u041A\u0440\u044B\u043C \u2022 \u0421\u043E\u0447\u0438"))),
                    React.createElement("p", null, "\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0432 \u041A\u0440\u044B\u043C\u0443 \u0438 \u0421\u043E\u0447\u0438.")),
                React.createElement("div", null,
                    React.createElement("strong", null, "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"),
                    React.createElement("a", { href: "#fleet" }, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A"),
                    React.createElement("a", { href: "#benefits" }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F"),
                    React.createElement("a", { href: "#reviews" }, "\u041E\u0442\u0437\u044B\u0432\u044B")),
                React.createElement("div", null,
                    React.createElement("strong", null, "\u041D\u0430 \u0441\u0430\u0439\u0442\u0435"),
                    React.createElement("a", { href: "https://rrentcar.ru/price/", target: "_blank", rel: "noreferrer" }, "\u0426\u0435\u043D\u044B"),
                    React.createElement("a", { href: "https://rrentcar.ru/online-oplata/", target: "_blank", rel: "noreferrer" }, "\u041E\u043D\u043B\u0430\u0439\u043D-\u043E\u043F\u043B\u0430\u0442\u0430"),
                    React.createElement("a", { href: "https://rrentcar.ru/kontakty/", target: "_blank", rel: "noreferrer" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                React.createElement("div", null,
                    React.createElement("strong", null, "\u0421\u0432\u044F\u0437\u044C"),
                    React.createElement("a", { href: "tel:+79788576377" }, "+7 978 857-63-77"),
                    React.createElement("a", { href: "mailto:RightRentCar@gmail.com" }, "RightRentCar@gmail.com"),
                    React.createElement("span", null, "\u041E\u041E\u041E \u00AB\u041D\u043E\u0432\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u00BB"))),
            React.createElement("div", { className: "container footer-bottom" },
                React.createElement("span", null, "\u00A9 2014\u20132026 RightRentCar"),
                React.createElement("span", null, "RightRentCar")));
    }
    renderModal() {
        if (!this.state.modalOpen)
            return null;
        const car = this.state.selected;
        return React.createElement("div", { className: "modal-backdrop", role: "presentation", onMouseDown: (e) => { if (e.target === e.currentTarget)
                this.closeModal(); } },
            React.createElement("div", { className: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "booking-title" },
                React.createElement("button", { className: "modal-close", onClick: this.closeModal, "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0444\u043E\u0440\u043C\u0443" },
                    React.createElement(Icon, { name: "close", size: 20 })),
                !this.state.formSent ? React.createElement("div", { className: "booking-form-wrap" },
                    React.createElement("span", { className: "kicker" }, "\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"),
                    React.createElement("h2", { id: "booking-title" }, car ? car.name : 'Подобрать автомобиль'),
                    React.createElement("p", null, car ? `${car.year} • ${car.className} • от ${money(car.shortPrice)} в сутки` : 'Оставьте контакты и укажите даты или пожелания к автомобилю.'),
                    React.createElement("form", { onSubmit: this.submitBooking, noValidate: true },
                        React.createElement("label", null,
                            "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
                            React.createElement("input", { name: "name", required: true, autoComplete: "name", placeholder: "\u0418\u043C\u044F", "aria-invalid": this.state.formError || undefined })),
                        React.createElement("label", null,
                            "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                            React.createElement("input", { name: "phone", required: true, autoComplete: "tel", inputMode: "tel", placeholder: "+7 999 000-00-00", "aria-invalid": this.state.formError || undefined })),
                        React.createElement("label", null,
                            "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                            React.createElement("textarea", { name: "comment", placeholder: car ? `Например: ${car.name}, с 12 по 17 октября` : 'Даты, класс автомобиля, пожелания' })),
                        this.state.formError && React.createElement("div", { className: "form-error", role: "alert" }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u043C\u044F \u0438 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430."),
                        React.createElement("div", { className: "form-note" }, "\u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 email RightRentCar. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C."),
                        React.createElement(Button, { type: "submit" },
                            "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C ",
                            React.createElement(Icon, { name: "arrow", size: 16 })))) : React.createElement("div", { className: "form-success", "aria-live": "polite" },
                    React.createElement("div", { className: "success-icon" },
                        React.createElement(Icon, { name: "check", size: 28 })),
                    React.createElement("span", { className: "kicker" }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u0433\u043E\u0442\u043E\u0432\u0430"),
                    React.createElement("h2", { id: "booking-title" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438"),
                    React.createElement("p", null, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0432 RightRentCar."),
                    React.createElement("div", { className: "success-actions" },
                        React.createElement(Button, { href: this.state.mailtoHref },
                            React.createElement(Icon, { name: "mail" }),
                            " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E"),
                        React.createElement(Button, { variant: "outline", href: "tel:+79788576377" },
                            React.createElement(Icon, { name: "phone" }),
                            " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")))));
    }
    render() {
        return React.createElement("div", { className: "site-shell" },
            this.renderHeader(),
            React.createElement("main", null,
                this.renderHero(),
                this.renderFleet(),
                this.renderBenefits(),
                this.renderStory(),
                this.renderCTA()),
            this.renderFooter(),
            this.renderModal());
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
