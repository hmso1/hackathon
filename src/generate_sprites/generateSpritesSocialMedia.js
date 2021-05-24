var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites');

var css = fs.readFileSync('./css/social_media.css', 'utf8');
var opts = {
	stylesheetPath: './dist',
	spritePath: './dist/images/'
};

postcss([sprites(opts)])
	.process(css, {
		from: './css/social_media.css',
	})
	.then(function(result) {
		fs.writeFileSync('./dist/social_media.css', result.css);
	});