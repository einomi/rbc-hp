import './Slider.sass'

import Header from './Header'
import SliderItem from './SliderItem'
import Pager from './Pager'

export default class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlideID: this.props.currentID,
			items: this.props.items
		};

		window.addEventListener('resize', this._update.bind(this));
	}

	componentDidMount() {
		this._initSlideWidth();
	}

	_update() {
		this._initSlideWidth();
		this.setSlide(this.state.currentSlideID, true, true);
	}

	_initSlideWidth() {
		this.slideWidth = ReactDOM.findDOMNode(this).offsetWidth;
	}

	setSlide(slideID, immediate, forced) {
		if (slideID == this.state.currentSlideID && !forced) {
			return;
		}

		let x = -(this.slideWidth * (slideID));

		if (!immediate) {
			var timeline = new TimelineMax();
			timeline.to(this.refs.items.childNodes, 0.9, {scale: 0.9, ease: Expo.easeIn});
			timeline.to(this.refs.items, 0.8, {
				x: x,
				ease: Expo.easeInOut,
				onComplete: () => {
					if (this.props.onAnimationEnd) {
						this.props.onAnimationEnd();
					}
				}
			});
			timeline.to(this.refs.items.childNodes, 0.8, {scale: 1, ease: Expo.easeOut});
		} else {
			TweenMax.set(this.refs.items, {
				x: x,
			});
			if (this.props.onAnimationEnd) {
				this.props.onAnimationEnd();
			}
		}

		this.setState({currentSlideID: slideID});
	}

	_onPagerLinkClick(id) {
		this.setSlide(id);
	}

	_next() {

	}

	_prev() {

	}

	render() {
		return (
			<div className="slider">
				<Header className="slider__header" currentID={this.state.currentSlideID} items={this.props.items}
				        onLinkClick={(id) => this.setSlide(id)}/>
				<div className="slider__inner">
					<div className="slider__items" ref="items">
						{
							this.state.items.map((item, index) =>
								<SliderItem key={item.id} {...item} />
							)
						}
					</div>
				</div>
				<Pager currentSlideID={this.state.currentSlideID} items={this.state.items}
				       onLinkClick={this._onPagerLinkClick.bind(this)}/>
			</div>
		);
	}
}
