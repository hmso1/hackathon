var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites');

var css = fs.readFileSync('./css/comment.css', 'utf8');
var opts = {
	stylesheetPath: './dist',
	spritePath: './dist/images/'
};

postcss([sprites(opts)])
	.process(css, {
		from: './css/comment.css',
	})
	.then(function(result) {
		fs.writeFileSync('./dist/comment.css', result.css);
	});