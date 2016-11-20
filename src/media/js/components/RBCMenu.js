import './RBCMenu.sass'

export default class RBCMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			opened: false
		};

		window.addEventListener('scroll', () => {
            let scrollY = window.scrollY || window.pageYOffset;
			if (scrollY === 0) {
				this._hideMenuList();
			}
		});
	}

	_showMenuList() {
		this.setState({opened: true});
	}

	_hideMenuList() {
		this.setState({opened: false});
	}

	render() {
        return (
            <div className="rbc-menu">
                <div className="rbc-menu-logo">
                    <a target="_blank" href="http://www.rbc.ru/"> </a>
                </div>
                <div className={classNames('rbc-menu-toggler', {'is_active': this.state.opened})} onClick={this._showMenuList.bind(this)}></div>
                <div className={classNames('rbc-menu-wrap', {'is_opened': this.state.opened})}>
                    <ul className="rbc-menu-list">
                        <li><a href="http://rbctv.rbc.ru/" target="_blank" className="menu-main__item">Телеканал</a></li>
                        <li><a href="http://www.rbcdaily.ru/" target="_blank" className="menu-main__item">Газета</a></li>
                        <li><a href="http://www.rbcdaily.ru/magazine" target="_blank" className="menu-main__item menu-main__item_border"
                          >Журнал</a></li>
                        <li><a href="http://quote.rbc.ru/" target="_blank" className="menu-main__item">Quote</a></li>
                        <li><a href="http://www.autonews.ru/" target="_blank" className="menu-main__item">Авто</a></li>
                        <li><a href="http://sport.rbc.ru/" target="_blank" className="menu-main__item">Спорт</a></li>
                        <li><a href="http://realty.rbc.ru/" target="_blank" className="menu-main__item">Недвижимость</a></li>
                        <li><a href="http://style.rbc.ru/" target="_blank" className="menu-main__item">Стиль</a></li>
                        <li><a href="http://www.cnews.ru/" target="_blank" className="menu-main__item menu-main__item_cnews"
                              ><span>C</span><span
                            className="menu-main__item_cnews__dot">•</span><span>News</span></a></li>
                        <li><a href="http://marketing.rbc.ru/" target="_blank" className="menu-main__item">Исследования</a>
                        </li>
                        <li><a href="http://bc.rbc.ru/" target="_blank" className="menu-main__item">Конференции</a></li>
                        <li><a className="search__menu" href="http://top.rbc.ru/search/" target="_blank"><span className="rbc-menu-list-search js-search-link"> </span></a></li>
                    </ul>
                </div>
                <div className="rbc-menu-notice">Совместный проект</div>
            </div>
        );
	}
}

