import './SliderItem.sass'

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="slider__item slider-item" style={{backgroundImage: `url(${this.props.bgPath})`}}>
				{/*<div className="slider-item__inner">*/}
                    <div className="slider-item__content">
                        <div className="slider-item__subtitle">Обзор</div>
                        <div className="slider-item__title">{ this.props.title }</div>
                        <div className="slider-item__button button">Читать</div>
                    </div>
				{/*</div>*/}
			</div>
		);
	}
}
