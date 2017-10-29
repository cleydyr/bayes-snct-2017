'use strict';

const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/treinar', function (req, res) {
  
})

app.get('/classificar', function (req, res) {
	
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})