'use strict';

const bayes = require('bayes');
const fs = require('fs');

const service = (text, cb) => {
	//pega os dados do serviço remoto
	fs.readFile('data.dat', (err, content) => {
		if (err) throw err;

		const data = JSON.parse(content);

		const sexClassifier = bayes.fromJson(JSON.stringify(data.sex));
		const humorClassifier = bayes.fromJson(JSON.stringify(data.humor));
		
		return cb({
			sex: sexClassifier.categorize(text),
			humor: humorClassifier.categorize(text)
		});
	});
	
}

module.exports = service;