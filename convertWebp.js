// webp-convert.js
import imagemin from 'imagemin';
import webp from 'imagemin-webp';

// const convertImages = async () => {
//     const files = ['./compressed_image/*.{jpg,png}'];
//     const config = {
//         destination: './webp',
//         plugins: [webp({ quality: 75 })],
//     };

//     console.log('開始轉換圖片⋯⋯');
//     await imagemin(files, config);
//     console.log('已將圖片轉成 WebP！');
// };

(async () => {
	await imagemin(['./compressed_image/*.{jpg,png}'], {
		destination: './webp',
		plugins: [
			webp({quality: 50})
		]
	});

	console.log('Images optimized');
})();

// convertImages();