import https from 'https';

// How to get image size given a URL of an image file
function getImageSize(url) {
  https.get(url, { method: 'HEAD' }, (res) => {
    const size = res.headers['content-length'];
    console.log(`Image size: ${size} bytes`);
    res.resume(); // To end connection
  }).on('error', (err) => {
    console.error('Error:', err.message);
  });
}
