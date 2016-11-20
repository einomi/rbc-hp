import './Nav.sass'

export default class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentID: this.props.currentID,
			items: this.props.items
		};
	}

	componentWillReceiveProps(nextProps, nextState) {
		this.setState({currentID: nextProps.currentID});
	}

	componentDidMount() {
		setTimeout(() => {
			this._updateBottomLine();
		}, 500);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentID !== this.state.currentID) {
			this._updateBottomLine();
		}
	}

	_updateBottomLine() {
        this._currentLink = ReactDOM.findDOMNode(this.refs[`link${this.state.currentID}`]);
		TweenMax.to(ReactDOM.findDOMNode(this.refs['bottomLine']), 0.5, {x: this._currentLink.offsetLeft, width: this._currentLink.offsetWidth, ease: Power3.easeInOut});
	}

	render() {
		return (
			<nav className={classNames(this.props.className, 'nav')}>
				{
					this.state.items.map((item, index) => {
                        return (
                            <div key={item.id} className="nav__item">
                                <div className="nav__item-link" onClick={this.props.onLinkClick.bind(this, item.id)} ref={`link${item.id}`}>{item.name}</div>
                            </div>
                        );
					})
				}
				<div className="nav__line" ref="bottomLine"></div>
			</nav>
		);
	}
}

