import Header from '../components/Header'
import Slider from '../components/Slider'

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		let currentID = this.props.params.hasOwnProperty('ID') ? parseInt(this.props.params.ID) : 0;
		this.state = {
			currentID: currentID
		};
	}

	render() {
        if (this.props.params.ID) {
            if (!/^[0-3]{1}$/.test(this.props.params.ID)) {
                return null;
            }
        }
		return (
			<div>
				<Slider currentID={this.state.currentID} items={this.props.items} ref="slider" />
				<div className="cpu-right">
					<div className="cpu-right__image"></div>
				</div>
			</div>
		);
	}
}
