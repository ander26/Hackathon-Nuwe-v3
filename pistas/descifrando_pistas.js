// Para ejecutar este código: node descifrando_pistas.js

// Variables constantes

const MOCK_DATA_URL = "./resources/MOCK_DATA.json";

// Leyendo el fichero JSON con los datos

const fs = require('fs');

const rawData = fs.readFileSync(MOCK_DATA_URL);

let mockData = JSON.parse(rawData);

// Descifrando la primera pista

const datosFiltrados = mockData.filter((element) => element.last_name === "Nuwe");

const primeraPista = datosFiltrados.length;

// Descifrando la segunda pista

const segundaPista = datosFiltrados[0].id.replace(/\D/g,'');

// Descifrando la tercera pista

const datosSinMascota = mockData.filter((element) => !element.pet);

const terceraPista = datosSinMascota.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue.ip.split(".")[0]),0);

// Uniendo valores para la contraseña

console.log (`${primeraPista}-${segundaPista}-${terceraPista}`)

// Contraseña obtenida: 9-129873-248
