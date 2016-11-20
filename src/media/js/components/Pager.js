import './Pager.sass'

export default class Pager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlideID: this.props.currentSlideID,
			items: this.props.items
		};
	}

	componentWillReceiveProps(nextProps, nextState) {
		this.setState({currentSlideID: nextProps.currentSlideID});
	}

	render() {
		return (
			<div className="pager">
				<div className="pager__items">
					{
						this.state.items.map((item, index) =>
							<div key={item.id}
							     className={classNames('pager__item', {'_active': item.id == this.props.currentSlideID})}
							     style={{backgroundImage: `url(${item.thumbPath})`}} onClick={this.props.onLinkClick.bind(this, item.id)}></div>
						)
					}
				</div>
			</div>
		);
	}
}
