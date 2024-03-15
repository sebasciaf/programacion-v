var brand = "mala practica";
let counter =100;
const token = "abc123";

counter =200;
console.log(counter);

let interpolation = `el valor de counter es: $(counter)`;
console.log(interpolation);
console.log("el valor de counter es: ", counter);
console.log("el valor de counter es "+counter);

    
//comentario en una linea 

/*
    variaslineas

*/ 
const personas = [
    [{
        "id": 1,
        "first_name": "Lamond",
        "last_name": "Hansel",
        "gender": "Male"
      }, {
        "id": 2,
        "first_name": "Lindsay",
        "last_name": "Haile",
        "gender": "Female"
      }, {
        "id": 3,
        "first_name": "Percival",
        "last_name": "Boniface",
        "gender": "Male"
      }, {
        "id": 4,
        "first_name": "Phil",
        "last_name": "Priddle",
        "gender": "Female"
      }, {
        "id": 5,
        "first_name": "Lindon",
        "last_name": "Raittie",
        "gender": "Male"
      }, {
        "id": 6,
        "first_name": "Yves",
        "last_name": "Mustill",
        "gender": "Agender"
      }, {
        "id": 7,
        "first_name": "Alard",
        "last_name": "Haggarty",
        "gender": "Male"
      }, {
        "id": 8,
        "first_name": "Saunder",
        "last_name": "Parton",
        "gender": "Male"
      }, {
        "id": 9,
        "first_name": "Bondy",
        "last_name": "Lackmann",
        "gender": "Male"
      }, {
        "id": 10,
        "first_name": "Katerina",
        "last_name": "Thridgould",
        "gender": "Female"
      }]
]

console.table(personas);