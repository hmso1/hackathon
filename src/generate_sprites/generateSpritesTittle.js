var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites');

var css = fs.readFileSync('./css/title.css', 'utf8');
var opts = {
	stylesheetPath: './dist',
	spritePath: './dist/images/'
};

postcss([sprites(opts)])
	.process(css, {
		from: './css/title.css',
	})
	.then(function(result) {
		fs.writeFileSync('./dist/title.css', result.css);
	});