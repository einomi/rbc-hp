import './Header.sass'

import Nav from './Nav'
import Share from './Share'

export default class Header extends React.Component {
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

	render() {
		return (
            <header className={classNames('site-header', this.props.className)}>
                <div className="site-header__logo logo"></div>
                <Nav currentID={this.state.currentID} className="site-header__nav" items={this.state.items} onLinkClick={this.props.onLinkClick} />
                <div className="site-header__share">
                    <Share />
                </div>
            </header>
        );
	}
}

