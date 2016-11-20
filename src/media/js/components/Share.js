import './Share.sass'

export default class Share extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		};
	}

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this.refs.container);
		Ya.share2(this.container, {
			theme: {
				services: 'facebook,vkontakte,twitter,gplus'
			},
			hooks: {
				onready: () => {
					this.shareButtons = this.refs['container'].querySelectorAll('.ya-share2__item');
				}
			}
		});
	}

	_toggle() {
		if (this.state.hidden == true) {
		    this._show();
		}
		else {
			this._hide();
		}
	}

	_show() {
		this.setState({'hidden': false});
		TweenMax.staggerFromTo(this.shareButtons, 0.5, {autoAlpha: 0, y: -5, x: -1}, {autoAlpha: 1, y: 0, x: 0, ease: Power3.easeInOut}, -0.1);
	}

	_hide() {
		this.setState({'hidden': true});
		TweenMax.staggerTo(this.shareButtons, 0.3, {autoAlpha: 0, y: -5, x: -1, ease: Power3.easeInOut}, 0.1);
	}

	render() {
		return (
			<div className={classNames(['share', this.props.className])}>
				<div className="share__container" ref="container"></div>
				<svg className={classNames('share__toggle', {'_active': !this.state.hidden})} onClick={this._toggle.bind(this)} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="27" height="33" viewBox="0 0 27 33"><path d="M27 6.878V33H0V6.878h11.57v1.45H1.544v23.22h23.914V8.33H15.43V6.88H27zM13.336 0c-.164.02-.25.095-.38.188L9.095 4.03c-.3.3-.3.786 0 1.086.303.3.79.3 1.092 0l2.54-2.53V19.17h1.543V2.587l2.542 2.53c.3.3.79.3 1.09 0 .302-.3.302-.786 0-1.086L14.046.188l-.255-.17c-.295-.004-.143.002-.454-.018z"/></svg>
			</div>
		);
	}
}


