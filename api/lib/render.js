var views = require('co-views');

// setup views mapping .html
// to the swig template engine

module.exports = views(__dirname + '/../../build', {
	map: { html: 'handlebars' }
});
