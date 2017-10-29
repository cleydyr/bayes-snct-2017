'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const training = require('./service/training.js');
const classifying = require('./service/classifying.js');

app.use(express.static('static'));

app.get('/treinar', function (req, res) {
	res.redirect('/training/training.html');
});

app.get('/classificar', function (req, res) {
	res.redirect('/classifying/classifying.html');
});

app.post('/classificar', bodyParser.urlencoded({extended: true}), function (req, res) {
	const body = req.body;
	console.log(body);
	classifying(body.text, (result) => res.send(result));
});

app.post('/treinar', bodyParser.urlencoded({extended: true}), function (req, res) {
	//training(body.)
	res.send('Funcionou treinar!');
	const body = req.body;
	console.log(body);
	training(body.text, body.humor, body.sex, () => {});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})