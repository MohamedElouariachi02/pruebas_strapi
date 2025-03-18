const API = require('./API.js');
const Exercise = require('./Exercise.js');

let ejercicios = []
const api = new API('http://localhost:1337/api/');
let exercise = api.getExercisesById(2);

exercise.then(info => {
    let exer = new Exercise(info.data[0].name, info.data[0].description);
    ejercicios.push(exer);
}).then(() => console.log(ejercicios))