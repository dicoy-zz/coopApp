const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

module.exports = (req, res) => {
  res.end(
  	'<!doctype html><html><head>'+
  	'<title>La Coop App</title>'+
  	'<link rel="stylesheet" href="external/tachyons.min.css">'+
  	'<script src="https://s3.amazonaws.com/stitch-sdks/js/bundles/4.3.0/stitch.js"></script>'+
  	'</head><body>'+
  	'<div id="app"></div><script src="dist/main.js"></script>'+
  	'</body></html>');
};
