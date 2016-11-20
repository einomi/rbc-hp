import Header from '../components/Header'

export default class Article extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articleID: this.props.route.articleID,
			items: this.props.items
		};
	}
	
	_onLinkClick() {
		console.log('click');

	}

	render() {
		return (
			<div>
				<Header items={this.state.items} currentID={this.state.articleID} onLinkClick={this._onLinkClick.bind(this)} />
			</div>
		);
	}
}
