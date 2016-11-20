import RBCMenu from './RBCMenu'

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			items: [
				{
					id: 0,
					name: 'EliteFolio',
					title: 'Ноутбук Elitebook Folio G1 — производительность милитари стандарта',
					bgPath: '/media/img/backgrounds/elite-folio.jpg',
					thumbPath: '/media/img/thumbs/elite-folio.jpg'
				},
				{
					id: 1,
					name: 'Elite x2',
					title: 'Elite x2 — мобильность под высокой защитой',
					bgPath: '/media/img/backgrounds/elite-x2.jpg',
					thumbPath: '/media/img/thumbs/elite-x2.jpg'
				},
				{
					id: 2,
					name: 'Elite Slice',
					title: 'Настольные ПК Elite Slice — модульное слияние формы и содержания',
					bgPath: '/media/img/backgrounds/elite-slice.jpg',
					thumbPath: '/media/img/thumbs/elite-slice.jpg'
				},
				{
					id: 3,
					name: 'Spectre Pro 13',
					title: 'Ноутбук Spectre Pro 13 — Техно-будущее: самый функциональный внешний аккумулятор',
					bgPath: '/media/img/backgrounds/spectre13.jpg',
					thumbPath: '/media/img/thumbs/spectre13.jpg'
				}
			]
		};
	}

	render() {
		return (
			<div>
				<RBCMenu />
				{this.props.children && React.cloneElement(this.props.children, {
					items: this.state.items
				})}
			</div>
		);
	}
}
