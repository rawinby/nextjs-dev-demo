const express = require("express");
const bodyParser = require('body-parser');
const next = require("next");
const mongoose = require('mongoose');
const routes = require('./router/routes');
const port = parseInt(process.env.PORT) || 8082;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = routes.getRequestHandler(app);

console.log(process.env.PORT);
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://apidb:@piDB#pwd@192.168.100.135:27017/apidb', {useNewUrlParser: true});
// mongoose.connect('mongodb://apidb:@piDB#pwd@192.168.100.135:27017/apidb');
// console.log(`Your port is ${process.env.REACT_APP_API_URL}`); // 8626

// console.log(mongoose);

app.prepare()
.then( () => {
	const server = express();
	server.use(bodyParser.json());
	// server.get("/blog/detail/:id", (request, response, route, query) => {
	// 	return app.render(request, response, route.page, query, "/blog/detail", { id: request.params.id });
	// })

	server.get("*",(request, response) => {
		return handle(request, response);
	})

	server.listen(port, error => {
		if(error) throw error;
		console.log("> Ready on http://localhost:" + port);
		console.log(routes);
		console.log(handle);
	})
})
.catch((ex) => {
	console.log(ex.stack);
	process.exit(1);
})

