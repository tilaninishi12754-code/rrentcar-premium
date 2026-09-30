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
    ['all', 'Все автомобили'], ['suv', 'Кроссоверы'], ['business', 'Бизнес'], ['cabrio', 'Кабриолеты'], ['family', '7+ мест'], ['new', 'Новинки']
];
function money(value) { return new Intl.NumberFormat('ru-RU').format(value) + ' ₽'; }
function Icon(props) {
    const s = props.size || 18;
    const c = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
    const p = {
        arrow: React.createElement("g", null,
            React.createElement("path", { d: "M5 12h14" }),
            React.createElement("path", { d: "m13 6 6 6-6 6" })),
        phone: React.createElement("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 2 2.3z" }),
        menu: React.createElement("g", null,
            React.createElement("path", { d: "M4 7h16M4 12h16M4 17h16" })), close: React.createElement("g", null,
            React.createElement("path", { d: "M18 6 6 18M6 6l12 12" })),
        check: React.createElement("path", { d: "m5 12 4 4L19 6" }), shield: React.createElement("g", null,
            React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
            React.createElement("path", { d: "m9 12 2 2 4-4" })),
        users: React.createElement("g", null,
            React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
            React.createElement("path", { d: "M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M16 3.2a4 4 0 0 1 0 7.6M22 21v-2a4 4 0 0 0-3-3.8" })),
        road: React.createElement("g", null,
            React.createElement("path", { d: "M8 21 10 3M16 21 14 3M12 7v2M12 13v2M12 19v2" })), mail: React.createElement("g", null,
            React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
            React.createElement("path", { d: "m3 7 9 6 9-6" }))
    };
    return React.createElement("svg", { ...c }, p[props.name]);
}
function Button(props) {
    const cls = ['button', props.variant ? `button-${props.variant}` : '', props.className || ''].filter(Boolean).join(' ');
    return props.href ? React.createElement("a", { className: cls, href: props.href, target: props.external ? '_blank' : undefined, rel: props.external ? 'noreferrer' : undefined }, props.children)
        : React.createElement("button", { className: cls, type: props.type || 'button', onClick: props.onClick }, props.children);
}
function Brand() {
    return React.createElement("span", { className: "brand-lockup" },
        React.createElement("img", { src: "./assets/right-rent-car-logo.png", alt: "Right Rent Car" }));
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.lastFocused = null;
        this.openModal = (car) => { this.lastFocused = document.activeElement; this.setState({ modalOpen: true, selected: car || null, formSent: false, formError: false, mailtoHref: 'mailto:RightRentCar@gmail.com' }); };
        this.closeModal = () => this.setState({ modalOpen: false }, () => { var _a; return (_a = this.lastFocused) === null || _a === void 0 ? void 0 : _a.focus(); });
        this.setFilter = (filter) => this.setState({ filter, expanded: true }, () => { var _a; return (_a = document.querySelector('#fleet-grid')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
        this.submitBooking = (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const d = new FormData(form);
            const name = String(d.get('name') || '').trim();
            const phone = String(d.get('phone') || '').trim();
            const comment = String(d.get('comment') || '').trim();
            if (!name || phone.replace(/\D/g, '').length < 10) {
                this.setState({ formError: true });
                return;
            }
            const car = this.state.selected;
            const subject = `Заявка с сайта RightRentCar${car ? ` — ${car.name}` : ''}`;
            const body = [`Имя: ${name}`, `Телефон: ${phone}`, car ? `Автомобиль: ${car.name}, ${car.year}` : '', comment ? `Комментарий: ${comment}` : ''].filter(Boolean).join('\n');
            this.setState({ formError: false, formSent: true, mailtoHref: `mailto:RightRentCar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` });
        };
        this.state = { filter: 'all', expanded: false, menuOpen: false, modalOpen: false, selected: null, formSent: false, mailtoHref: 'mailto:RightRentCar@gmail.com', formError: false };
        this.keyHandler = (e) => { if (e.key === 'Escape' && this.state.modalOpen)
            this.closeModal(); };
    }
    componentDidMount() { document.addEventListener('keydown', this.keyHandler); }
    componentWillUnmount() { document.removeEventListener('keydown', this.keyHandler); }
    filteredCars() { const list = this.state.filter === 'all' ? CARS : CARS.filter(c => c.category === this.state.filter); return this.state.expanded || this.state.filter !== 'all' ? list : list.slice(0, 9); }
    renderHeader() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "topline" },
                React.createElement("div", { className: "container topline-inner" },
                    React.createElement("span", null, "\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0432 \u041A\u0440\u044B\u043C\u0443 \u0438 \u0421\u043E\u0447\u0438"),
                    React.createElement("div", null,
                        React.createElement("a", { href: "tel:+79788576377" }, "+7 978 857-63-77"),
                        React.createElement("a", { href: "mailto:RightRentCar@gmail.com" }, "RightRentCar@gmail.com")))),
            React.createElement("header", { className: "site-header" },
                React.createElement("div", { className: "container header-inner" },
                    React.createElement("a", { href: "#top", className: "brand-link" },
                        React.createElement(Brand, null)),
                    React.createElement("nav", { className: 'nav ' + (this.state.menuOpen ? 'is-open' : ''), "aria-label": "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F" },
                        React.createElement("a", { href: "#fleet", onClick: () => this.setState({ menuOpen: false }) }, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A"),
                        React.createElement("a", { href: "#conditions", onClick: () => this.setState({ menuOpen: false }) }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F"),
                        React.createElement("a", { href: "#reviews", onClick: () => this.setState({ menuOpen: false }) }, "\u041E\u0442\u0437\u044B\u0432\u044B"),
                        React.createElement("a", { href: "https://rrentcar.ru/price/", target: "_blank", rel: "noreferrer" }, "\u0426\u0435\u043D\u044B"),
                        React.createElement("a", { href: "https://rrentcar.ru/kontakty/", target: "_blank", rel: "noreferrer" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                    React.createElement("div", { className: "header-actions" },
                        React.createElement("a", { className: "header-phone", href: "tel:+79788576377" },
                            React.createElement(Icon, { name: "phone", size: 17 }),
                            React.createElement("span", null, "+7 978 857-63-77")),
                        React.createElement(Button, { onClick: () => this.openModal(), className: "header-book" }, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
                        React.createElement("button", { className: "menu-btn", "aria-label": "\u041C\u0435\u043D\u044E", onClick: () => this.setState({ menuOpen: !this.state.menuOpen }) },
                            React.createElement(Icon, { name: this.state.menuOpen ? 'close' : 'menu', size: 22 }))))));
    }
    renderHero() {
        return React.createElement("section", { className: "hero", id: "top" },
            React.createElement("div", { className: "container hero-grid" },
                React.createElement("div", { className: "hero-copy" },
                    React.createElement("span", { className: "eyebrow" }, "RIGHT RENT CAR \u2022 \u041A\u0420\u042B\u041C \u0418 \u0421\u041E\u0427\u0418"),
                    React.createElement("h1", null,
                        "\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E",
                        React.createElement("br", null),
                        React.createElement("em", null, "\u0441 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043E\u043C")),
                    React.createElement("p", null, "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440\u044B, \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0435\u0434\u0430\u043D\u044B, \u043A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442\u044B \u0438 \u043C\u0438\u043D\u0438\u0432\u044D\u043D\u044B \u0434\u043B\u044F \u043F\u043E\u0435\u0437\u0434\u043E\u043A \u043F\u043E \u041A\u0440\u044B\u043C\u0443 \u0438 \u0421\u043E\u0447\u0438. \u0422\u0430\u0440\u0438\u0444, \u0437\u0430\u043B\u043E\u0433 \u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0432\u0438\u0434\u043D\u044B \u0441\u0440\u0430\u0437\u0443."),
                    React.createElement("div", { className: "hero-actions" },
                        React.createElement(Button, { onClick: () => { var _a; return (_a = document.querySelector('#fleet')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' }); } },
                            "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C ",
                            React.createElement(Icon, { name: "arrow" })),
                        React.createElement(Button, { variant: "secondary", href: "tel:+79788576377" },
                            React.createElement(Icon, { name: "phone" }),
                            " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C")),
                    React.createElement("div", { className: "hero-trust" },
                        React.createElement("span", null,
                            React.createElement(Icon, { name: "shield", size: 16 }),
                            " \u041E\u0421\u0410\u0413\u041E + \u041A\u0410\u0421\u041A\u041E"),
                        React.createElement("span", null,
                            React.createElement(Icon, { name: "road", size: 16 }),
                            " \u0411\u0435\u0437\u043B\u0438\u043C\u0438\u0442 \u043E\u0442 3 \u0441\u0443\u0442\u043E\u043A"),
                        React.createElement("span", null,
                            React.createElement(Icon, { name: "users", size: 16 }),
                            " \u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u043E\u0442 23 \u043B\u0435\u0442"))),
                React.createElement("div", { className: "hero-visual" },
                    React.createElement("div", { className: "hero-image-wrap" },
                        React.createElement("img", { src: "https://rrentcar.ru/media/cache/2d/63/2d636eaa39f91c5d7434cfb60add80bb.jpg", alt: "BMW X4 xDrive \u0438\u0437 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0430 RightRentCar" }),
                        React.createElement("div", { className: "hero-image-overlay" }),
                        React.createElement("div", { className: "hero-badge" },
                            React.createElement("small", null, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A"),
                            React.createElement("strong", null, "\u043E\u0442 4 650 \u20BD / \u0441\u0443\u0442\u043A\u0438"))),
                    React.createElement("div", { className: "orange-panel" },
                        React.createElement("span", null, "\u041A\u0440\u044B\u043C \u2022 \u0421\u043E\u0447\u0438"),
                        React.createElement("strong", null, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438.")))));
    }
    renderCard(car, index) { return React.createElement("article", { className: "car-card", key: car.name + car.year, style: { '--i': index } },
        React.createElement("div", { className: "car-media" },
            React.createElement("img", { src: car.image, alt: `${car.name}, ${car.year}`, loading: "lazy" }),
            React.createElement("span", { className: "year-chip" }, car.year),
            car.badge && React.createElement("span", { className: "badge-chip" }, car.badge)),
        React.createElement("div", { className: "car-body" },
            React.createElement("div", { className: "car-title" },
                React.createElement("div", null,
                    React.createElement("span", null, car.className),
                    React.createElement("h3", null, car.name)),
                React.createElement("button", { onClick: () => this.openModal(car), "aria-label": `Забронировать ${car.name}` },
                    React.createElement(Icon, { name: "arrow", size: 17 }))),
            React.createElement("div", { className: "specs" },
                React.createElement("span", null, car.gearbox),
                React.createElement("span", null, car.body),
                React.createElement("span", null, car.drive),
                React.createElement("span", null,
                    car.seats,
                    " \u043C\u0435\u0441\u0442")),
            React.createElement("div", { className: "price-block" },
                React.createElement("div", null,
                    React.createElement("small", null, "1\u20132 \u0441\u0443\u0442\u043E\u043A"),
                    React.createElement("strong", null, money(car.shortPrice)),
                    React.createElement("em", null, "/\u0441\u0443\u0442\u043A\u0438")),
                React.createElement("div", null,
                    React.createElement("small", null, "10+ \u0441\u0443\u0442\u043E\u043A"),
                    React.createElement("strong", null, money(car.longPrice)),
                    React.createElement("em", null, "/\u0441\u0443\u0442\u043A\u0438"))),
            React.createElement("div", { className: "deposit" },
                React.createElement("span", null, "\u0417\u0430\u043B\u043E\u0433"),
                React.createElement("strong", null, money(car.deposit))),
            React.createElement(Button, { onClick: () => this.openModal(car), className: "card-button" }, "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))); }
    renderFleet() { const cars = this.filteredCars(); return React.createElement("section", { className: "fleet", id: "fleet" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "section-heading" },
                React.createElement("div", null,
                    React.createElement("span", { className: "eyebrow" }, "\u0410\u0412\u0422\u041E\u041F\u0410\u0420\u041A"),
                    React.createElement("h2", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0430\u0448\u0438\u043D\u0443 \u043F\u043E\u0434 \u043F\u043E\u0435\u0437\u0434\u043A\u0443")),
                React.createElement("p", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u043A\u043B\u0430\u0441\u0441, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043D\u0430\u0439\u0442\u0438 \u043C\u0430\u0448\u0438\u043D\u0443 \u0434\u043B\u044F \u0433\u043E\u0440\u043E\u0434\u0430, \u043F\u043E\u0431\u0435\u0440\u0435\u0436\u044C\u044F, \u0434\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438 \u0438\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438.")),
            React.createElement("div", { className: "filters", role: "group", "aria-label": "\u0424\u0438\u043B\u044C\u0442\u0440 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0430" }, FILTERS.map(([k, l]) => React.createElement("button", { key: k, className: this.state.filter === k ? 'active' : '', onClick: () => this.setFilter(k) }, l))),
            React.createElement("div", { className: "fleet-grid", id: "fleet-grid" }, cars.length ? cars.map((c, i) => this.renderCard(c, i)) : React.createElement("div", { className: "empty-state" }, "\u0412 \u044D\u0442\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439.")),
            this.state.filter === 'all' && !this.state.expanded && React.createElement("div", { className: "show-all" },
                React.createElement(Button, { variant: "secondary", onClick: () => this.setState({ expanded: true }) },
                    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A (",
                    CARS.length,
                    ")")))); }
    renderConditions() { return React.createElement("section", { className: "conditions", id: "conditions" },
        React.createElement("div", { className: "container conditions-grid" },
            React.createElement("div", { className: "conditions-copy" },
                React.createElement("span", { className: "eyebrow" }, "\u0423\u0421\u041B\u041E\u0412\u0418\u042F"),
                React.createElement("h2", null, "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u0431\u0435\u0437 \u043C\u0435\u043B\u043A\u043E\u0433\u043E \u0448\u0440\u0438\u0444\u0442\u0430"),
                React.createElement("p", null, "\u041D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u0443\u0436\u0435 \u0432\u0438\u0434\u043D\u044B \u0442\u0430\u0440\u0438\u0444 \u0438 \u0437\u0430\u043B\u043E\u0433. \u041F\u0435\u0440\u0435\u0434 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u0435\u0440\u0438\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0430\u0440\u0435\u043D\u0434\u044B."),
                React.createElement(Button, { variant: "secondary", href: "https://rrentcar.ru/usloviya/", external: true },
                    "\u0412\u0441\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043D\u0430 RightRentCar ",
                    React.createElement(Icon, { name: "arrow", size: 16 }))),
            React.createElement("div", { className: "conditions-list" },
                React.createElement("div", null,
                    React.createElement("b", null, "01"),
                    React.createElement("h3", null, "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435"),
                    React.createElement("p", null, "\u0412\u0441\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438 \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u044B \u043F\u043E \u041E\u0421\u0410\u0413\u041E \u0438 \u041A\u0410\u0421\u041A\u041E.")),
                React.createElement("div", null,
                    React.createElement("b", null, "02"),
                    React.createElement("h3", null, "\u041F\u0440\u043E\u0431\u0435\u0433"),
                    React.createElement("p", null, "\u041E\u0442 3 \u0441\u0443\u0442\u043E\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u0435\u0437\u043B\u0438\u043C\u0438\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0431\u0435\u0433. \u041D\u0430 1\u20132 \u0434\u043D\u044F \u0432 \u0442\u0430\u0440\u0438\u0444 \u0432\u0445\u043E\u0434\u0438\u0442 \u0434\u043E 200 \u043A\u043C \u0432 \u0441\u0443\u0442\u043A\u0438.")),
                React.createElement("div", null,
                    React.createElement("b", null, "03"),
                    React.createElement("h3", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442 \u0438 \u0441\u0442\u0430\u0436"),
                    React.createElement("p", null, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F 23 \u0433\u043E\u0434\u0430, \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0430\u0436 3 \u0433\u043E\u0434\u0430. \u0414\u043B\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u044B\u0448\u0435.")),
                React.createElement("div", null,
                    React.createElement("b", null, "04"),
                    React.createElement("h3", null, "\u041E\u043F\u043B\u0430\u0442\u0430"),
                    React.createElement("p", null, "\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u043F\u0435\u0440\u0451\u0434 \u0437\u0430 \u0432\u0435\u0441\u044C \u0441\u0440\u043E\u043A \u0430\u0440\u0435\u043D\u0434\u044B."))))); }
    renderReviews() { return React.createElement("section", { className: "reviews", id: "reviews" },
        React.createElement("div", { className: "container review-card" },
            React.createElement("div", { className: "review-score" },
                React.createElement("span", null, "5,0"),
                React.createElement("small", null, "\u0440\u0435\u0439\u0442\u0438\u043D\u0433, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435")),
            React.createElement("div", { className: "review-copy" },
                React.createElement("span", { className: "eyebrow" }, "\u041E\u0422\u0417\u042B\u0412\u042B"),
                React.createElement("blockquote", null, "\u00AB\u0412\u0441\u0435 \u0431\u044B\u043B\u043E \u043F\u0440\u043E\u0441\u0442\u043E, \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E, \u0441\u0435\u0440\u0432\u0438\u0441 \u043A\u0430\u043A \u0432 \u0415\u0432\u0440\u043E\u043F\u0435!\u00BB"),
                React.createElement("p", null, "\u0410\u043D\u043D\u0430 \u0438 \u041D\u0438\u043A\u0438\u0442\u0430 \u2022 \u043E\u0442\u0437\u044B\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 RightRentCar"),
                React.createElement("a", { href: "https://rrentcar.ru/feedback/", target: "_blank", rel: "noreferrer" },
                    "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B ",
                    React.createElement(Icon, { name: "arrow", size: 15 }))))); }
    renderCTA() { return React.createElement("section", { className: "cta" },
        React.createElement("div", { className: "container cta-inner" },
            React.createElement("div", null,
                React.createElement("span", { className: "eyebrow" }, "\u0411\u0420\u041E\u041D\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u0415"),
                React.createElement("h2", null,
                    "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C.",
                    React.createElement("br", null),
                    "\u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0443\u0442\u043E\u0447\u043D\u0438\u043C.")),
            React.createElement("div", null,
                React.createElement(Button, { onClick: () => this.openModal() },
                    "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ",
                    React.createElement(Icon, { name: "arrow" })),
                React.createElement("a", { href: "tel:+79788576377" }, "+7 978 857-63-77")))); }
    renderFooter() { return React.createElement("footer", { className: "footer" },
        React.createElement("div", { className: "container footer-inner" },
            React.createElement("div", null,
                React.createElement(Brand, null),
                React.createElement("p", null, "\u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435\u0439 \u0432 \u041A\u0440\u044B\u043C\u0443 \u0438 \u0421\u043E\u0447\u0438.")),
            React.createElement("div", null,
                React.createElement("a", { href: "#fleet" }, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A"),
                React.createElement("a", { href: "#conditions" }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F"),
                React.createElement("a", { href: "#reviews" }, "\u041E\u0442\u0437\u044B\u0432\u044B")),
            React.createElement("div", null,
                React.createElement("a", { href: "https://rrentcar.ru/price/", target: "_blank", rel: "noreferrer" }, "\u0426\u0435\u043D\u044B"),
                React.createElement("a", { href: "https://rrentcar.ru/online-oplata/", target: "_blank", rel: "noreferrer" }, "\u041E\u043F\u043B\u0430\u0442\u0430"),
                React.createElement("a", { href: "https://rrentcar.ru/kontakty/", target: "_blank", rel: "noreferrer" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
            React.createElement("div", null,
                React.createElement("a", { href: "tel:+79788576377" }, "+7 978 857-63-77"),
                React.createElement("a", { href: "mailto:RightRentCar@gmail.com" }, "RightRentCar@gmail.com"),
                React.createElement("span", null, "\u041E\u041E\u041E \u00AB\u041D\u043E\u0432\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u00BB"))),
        React.createElement("div", { className: "container copyright" }, "\u00A9 2014\u20132026 RightRentCar")); }
    renderModal() { if (!this.state.modalOpen)
        return null; const car = this.state.selected; return React.createElement("div", { className: "modal-backdrop", onMouseDown: (e) => { if (e.target === e.currentTarget)
            this.closeModal(); } },
        React.createElement("div", { className: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title" },
            React.createElement("button", { className: "modal-close", onClick: this.closeModal, "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" },
                React.createElement(Icon, { name: "close" })),
            !this.state.formSent ? React.createElement(React.Fragment, null,
                React.createElement("span", { className: "eyebrow" }, "\u0411\u0420\u041E\u041D\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u0415"),
                React.createElement("h2", { id: "modal-title" }, car ? car.name : 'Подобрать автомобиль'),
                React.createElement("p", null, car ? `${car.year} • ${car.className} • от ${money(car.shortPrice)} в сутки` : 'Оставьте контакты и пожелания по автомобилю.'),
                React.createElement("form", { onSubmit: this.submitBooking, noValidate: true },
                    React.createElement("label", null,
                        "\u0418\u043C\u044F",
                        React.createElement("input", { name: "name", autoComplete: "name", placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F" })),
                    React.createElement("label", null,
                        "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                        React.createElement("input", { name: "phone", autoComplete: "tel", inputMode: "tel", placeholder: "+7 999 000-00-00" })),
                    React.createElement("label", null,
                        "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                        React.createElement("textarea", { name: "comment", placeholder: "\u0414\u0430\u0442\u044B \u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F" })),
                    this.state.formError && React.createElement("div", { className: "form-error" }, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F \u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430."),
                    React.createElement(Button, { type: "submit" }, "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"))) : React.createElement("div", { className: "success" },
                React.createElement("div", { className: "success-icon" },
                    React.createElement(Icon, { name: "check", size: 26 })),
                React.createElement("h2", { id: "modal-title" }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0430"),
                React.createElement("p", null, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 email RightRentCar \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435."),
                React.createElement("div", null,
                    React.createElement(Button, { href: this.state.mailtoHref },
                        React.createElement(Icon, { name: "mail" }),
                        " \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E"),
                    React.createElement(Button, { variant: "secondary", href: "tel:+79788576377" },
                        React.createElement(Icon, { name: "phone" }),
                        " \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"))))); }
    render() { return React.createElement("div", null,
        this.renderHeader(),
        React.createElement("main", null,
            this.renderHero(),
            this.renderFleet(),
            this.renderConditions(),
            this.renderReviews(),
            this.renderCTA()),
        this.renderFooter(),
        this.renderModal()); }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
