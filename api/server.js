var render = require('./lib/render');
var route = require('koa-route');
var koa = require('koa');
var app = koa();

// static
if (process.env.NODE_ENV == 'DEVELOPMENT') {
	var serve = require('koa-static');
	app.use(serve(__dirname + '/../build/'));
}


// route middleware
app.use(route.get('/', index));


// route definitions
function *index() {
	this.body = yield render('index');
}

app.listen(3000);
console.log('listening on port 3000');
