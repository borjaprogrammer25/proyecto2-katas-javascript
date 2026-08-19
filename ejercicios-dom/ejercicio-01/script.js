//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log("1.1. Mostrar con la clase o .");
const boton = document.querySelector(".showme");
console.log(boton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log("1.2. Mostrar con el identificador o #");
const h1 = document.querySelector("#pillado");
console.log(h1);

//Utilizamos el textContent para mostrar el contenido de dentro de la sintaxis del html
//let h1Contenido = document.querySelector("#pillado").textContent;
//console.log(h1Contenido);

//1.3 Usa querySelector para mostrar por consola todos los p
console.log("1.3. Mostrar todos los parrafos p");
const parrafos = document.querySelectorAll("p");
console.log(parrafos);
parrafos.forEach(parrafo => console.log(parrafo));

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
console.log("1.4. Mostrar todos los elementos de la misma clase");
const clasePokemons = document.querySelectorAll(".pokemon");
console.log(clasePokemons);
clasePokemons.forEach(clasePokemon => console.log(clasePokemon));


//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
console.log("1.5. Mostrar todos los elementos con el mismo atributo");
const testMes = document.querySelectorAll(`[data-function="testMe"]`);
console.log(testMes);
testMes.forEach(testMe => console.log(testMe));

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
//const testMe3 = document.querySelectorAll('[data-function="testMe"]');
//console.log(testMe3);
console.log("1.6. Mostrar el tercer elemento de un conjunto de elementos de la misma clase");
const testMe3 =  document.querySelectorAll('[data-function="testMe"]')[2];
console.log(testMe3);
//Ampliacion mostrar el valor del tercer elemento de un conjunto de elementos de la misma clase
console.log("Ampliacion ejercicio anterior mostrar el nombre del elemento de la propiedad del ejercicio anterior");
const testMe3Nombre = testMe3.innerHTML; 