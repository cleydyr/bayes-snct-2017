'use strict';

const bayes = require('bayes');
const fs = require('fs');

const dataFileName = 'data.dat';

const service = (text, humor, sex, cb) => {

	if (fs.existsSync(dataFileName)) {
		fs.readFile('data.dat', (err, content) => {
			if (err) {
				console.log(err);
				throw err;
			}

			text = text.toLowerCase();

			const data = JSON.parse(content);

			const sexClassifier = bayes.fromJson(JSON.stringify(data.sex));
			const humorClassifier = bayes.fromJson(JSON.stringify(data.humor));
	
			humorClassifier.learn(text, humor);
			sexClassifier.learn(text, sex);
	
			const sexClassifierJson = JSON.parse(sexClassifier.toJson());
			const humorClassifierJson = JSON.parse(humorClassifier.toJson());
	
			var datastr = JSON.stringify({sex: sexClassifierJson, humor: humorClassifierJson});

			fs.writeFile('data.dat', datastr, (err) => {
				cb();
			});
		});
	}
	else {
		const sexClassifier = bayes();
		const humorClassifier = bayes();

		humorClassifier.learn(text, humor);
		sexClassifier.learn(text, sex);

		const sexClassifierJson = JSON.parse(sexClassifier.toJson());
		const humorClassifierJson = JSON.parse(humorClassifier.toJson());

		fs.writeFile('data.dat', JSON.stringify({sex: sexClassifierJson, humor: humorClassifierJson}), (err) => {
			cb();
		});
	}
}

module.exports = service;