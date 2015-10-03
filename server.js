// Simplest node web server ever! http://stackoverflow.com/a/8427954/2831353
var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT || 8080;
connect().use(serveStatic(__dirname)).listen(port);
console.log('Server listening on ' + port)
