const training = require('./service/training.js');
const classifying = require('./service/classifying.js');

const defaultCB = () => {};

training('amazing, awesome movie!! Yeah!! Oh boy.', 'Alegria', 'm', defaultCB);
training('Sweet, this is incredibly, amazing, perfect, great!!', 'Alegria', 'm', defaultCB);
training('terrible, shitty thing. Damn. Sucks!!', 'Raiva', 'm', defaultCB);

classifying('awesome, cool, amazing!! Yay.', (result) => console.log(result));