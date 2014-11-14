
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var html = require('html');

var cors = require('cors');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());


app.use(cors()); //http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs


app.use(app.router);
//routes
routes(app);

app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));

// Yes, here there is another approach which obviously seems better:
// merge all resource to the parent folders; But this cause a drawback:
// when a single effect part needed, it is not so easy to pick the files
// needed out.
// So, just leave each folder's resources alone.
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public/scenes/s01-log531')));
app.use(express.static(path.join(__dirname, 'public/scenes/s02-cloud')));
app.use(express.static(path.join(__dirname, 'public/scenes/s03-ocean')));
app.use(express.static(path.join(__dirname, 'public/scenes/s04-panorama')));
app.use(express.static(path.join(__dirname, 'public/scenes/s05-particles')));
app.use(express.static(path.join(__dirname, 'public/scenes/s06-map')));
app.use(express.static(path.join(__dirname, 'public/scenes/s07-lots-photo')));
app.use(express.static(path.join(__dirname, 'public/scenes/s08-double-video')));
app.use(express.static(path.join(__dirname, 'public/scenes/s09-pageIn3D')));
app.use(express.static(path.join(__dirname, 'public/scenes/s10-car-racing')));
app.use(express.static(path.join(__dirname, 'public/scenes/s11-football')));
app.use(express.static(path.join(__dirname, 'public/scenes/s12-karma')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
