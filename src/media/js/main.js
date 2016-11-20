require('../sass/common.sass');

import {Router, IndexRoute, Route, browserHistory} from 'react-router'

import App from './components/App'
import Main from './pages/Main'
import Article from './pages/Article'

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main}></IndexRoute>
			<Route path="/:ID" component={Main}></Route>
			<Route path="/article/1" articleID={0} component={Article}></Route>
		</Route>
	</Router>
), document.getElementById('app'));


