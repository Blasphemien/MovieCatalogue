/**
 * Created by keilc on 6/03/2017.
 */
const path = require('path');
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
/*
var port = process.env.PORT || '3000';
app.set('port', port);
/!**
 * Create HTTP segggrver.
 *!/
var server = http.createServer(app);
/!**
 * Listen on provided port, on all network interfaces.
 *!/
server.listen(port, function () { return console.log("API running on localhost:" + port); });
*/
