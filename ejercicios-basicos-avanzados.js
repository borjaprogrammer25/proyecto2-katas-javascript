// -------------------- Ejercicio 1 --------------------
// Crea una variable llamada miSuperheroeFavorito y asigna el valor "Hulk".
let miSuperHeroeFavorito = "Hulk";
//Crea una variable llamada numeroFavorito y asigna el valor 50.
let numeroFavorito = 50;
// Crea una variable llamada altura y asigna el valor 5.
//Crea una variable llamada longitud y asigna el valor 10.
 let altura = 5;
 let longitud = 10;
 //Crea una variable llamada suma y asigna el valor de altura + longitud.
 let suma = altura + longitud;
 // Muestra todas las variables por consola.
 console.log(suma);

 //------------------- Ejercicio 2 -------------------
 const nombre = "Leia";
 const apellido = "Organa";
 const edad = 20;
 console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa Alderaan.");
 const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
 const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
 const precioSable = sable1.precio + sable2.precio;
 console.log(precioSable);

let precioBaseGlobal = 10000;
// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};
// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log("El precio final de " + nave1.nombre + " = " + nave1.precioFinal);
console.log("El precio final de " + nave2.nombre + " = " + nave2.precioFinal);

//------------------------ Ejercicio 3 -----------------------
//3.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log("Resultado de multiplicar 10x5 = " + 10*5);
//3.2 Divide 10 por 2 y muestra el resultado en un console.
console.log("Resultado de dividir 10/2 = " + 10/2);
//3.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log("El modulo o resto de 15/9 = " + 15%9);
//3.4 Usa el correcto operador de asignación que resultará en o = 15,
//teniendo dos variables p = 10 y j = 5.
const p=10;
const j=5;
const o = p + j;
console.log("El resultado de sumar " + p + " + " + j + " = " + o);
//3.5 Usa el correcto operador de asignación que resultará en i = 50,
//teniendo dos variables c = 10 y m = 5.
const c = 10;
const m = 5;
const i = c*m;
console.log("El resultado de multiplicar " + c + " x " + m + " = " +i);

//--------------------------- Ejercicio 4 ---------------------------
//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[3]);
//4.2 - Coloca en el último lugar de este array a "Cervasio".
console.log(aldeanos[4])
aldeanos.push("Cervasio");
console.log(aldeanos[aldeanos.length-1]);
//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";
//4.4 - Dale la vuelta a este array.
console.log(aldeanos.reverse());
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos.splice(3, "Candela");
console.log(aldeanos[3]);
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.
console.log(aldeanos[aldeanos.length-1]);

//--------------------------- Ejercicio 5 ---------------------------
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number3*5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1*2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//-------------------- Ejercicio 6 -----------------------
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for(let i=0; i<10; i++){
    console.log(i);
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
//cuando el resto del numero dividido entre 2 sea 0.
console.log("*****");         
for(let i=0; i<10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//1.3 Crea un bucle para conseguir dormir contando ovejas.
//Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
//y cambia el mensaje en la décima vuelta a '¡Dormido!'.
for(let i=0; i<=10; i++){
    console.log("Intentando dormir " + i + " 🐑");
}
console.log("Dormido");

//---------------------- Ejercicio 7 -------------------
//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
  if(numberOne > numberTwo){
    console.log("El numero " + numberOne + " es mayor que " + numberTwo);
  }
  else {
    console.log("El numero " + numberTwo + " es mayor que " + numberOne);
  }
}
greaterNumber(8,4);
greaterNumber(2,19);

//-------------------- Ejercicio 8 ---------------- 
//Buscar la palabra más larga
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
let palabraMasLarga = "";
let longitudMax = 0;
function findLongestWord(stringList) {
  for(const palabra of stringList){
    if(palabra.length > longitudMax){
        palabraMasLarga = palabra;
        longitudMax = palabra.length;
    }
  }
  return palabraMasLarga;
}
console.log(findLongestWord(avengers));

//-------------- Ejercicio 9 ------------------
// Calcular suma array
const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumaTotal = 0;
function sumNumbers(numberList) {
  for(let i=0; i<numbers.length; i++){
    sumaTotal += numberList[i];
  }
  console.log(sumaTotal);
}
sumNumbers(numbers);

//---------------- Ejercicio 10  ------------
//Calcular promedio
const numbersPromedrio = [12, 21, 38, 5, 45, 37, 6];
let sumaPromedio = 0;
function average(numberList) {
  for(let i=0; i<numberList.length; i++){
    sumaPromedio += numberList[i];
  }
  console.log((sumaPromedio/numberList.length).toFixed(2));
}
average(numbersPromedrio);

//-------------- Ejercicio 11 -------------------
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
let sumaWord = 0;
function averageWord(list) {
  for(let i=0; i<list.length; i++){
    if(typeof list[i] == "number"){
        sumaWord += list[i];
    }
  }
  console.log(sumaWord);
}
averageWord(mixedElements);

//-------------- Ejercicio 12 ----------------
//Valores unicos
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
    let listSinRepes = [];
    console.log(list);
    for(let i=0; i<list.length; i++){
        listSinRepes.push(list[i]);
        for(let j=i+1; j<list.length; j++){
            if(list[j] == list[i]){
                list.splice(j,1);
            }
        }
    }
    console.log(listSinRepes);
}
removeDuplicates(duplicates);

//------------- Ejercicio 13 ----------------
//Buscador de nombres
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, stringPalabra) {
    for(const palabra of nameList){
    if(palabra == stringPalabra){
        console.log(true);
    }
    else {
        console.log(false);
    }
  }
}
nameFinder(names,"Bruce");

//--------------- Ejercicio 14 -------------------
//Contador repeticiones
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let palabra = "";
  let contador = 0;
  for(let i=0; i<list.length; i++){
    palabra = list[i];
    contador = 0;
    for(let j=0; j<list.length; j++){
      if(palabra == list[j]){
        contador++;
      }
    }
    console.log(palabra + " : " + contador);
  }
}
repeatCounter(words);

//------------ Ejercicio 15 --------------
//includes
const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];
for(const palabra of products){
  if(palabra.includes("Camiseta")){
    console.log(palabra);
  }
}
//------------- Ejercicio 16 ----------------
//for of
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];
for(const palabra of placesToTravel){
  console.log(palabra);
}

//--------- Ejercicio 17 -------------
//for in
const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};
for(const key in alien){
  console.log("La propiedad " + key + " tiene como valor " + alien[key]);
}

//--------- Ejercicio 18 ------------
//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.
const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
console.log(placesToTravel2);
for(let i=0; i<placesToTravel2.length; i++){
  if(placesToTravel2[i].id == 11 || placesToTravel2[i].id == 40){
    placesToTravel2.splice(i,1);
  }
}
console.log(placesToTravel2);

//------------- Ejercicio 19 --------------
//Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
console.log(toys);
let contador = 0;
for(const toy of toys){
  if(toy.name.includes("gato")){
    toys.splice(contador,1);
    contador++;
  }
  else {
    contador++;
  }
}
console.log(toys);

//------- Ejercicio 20 --------------
//For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.
const popularToys = []

const toys2 = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: "Rubik's Cube", sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];

for(const toy of toys2){
  if(toy.sellCount > 15){
    popularToys.push(toy);
  }
}
console.log(popularToys);

//-------------- Ejercicio 21 ----------------
//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad 
//precedidos del texto "Usuarios menores de edad:" 
//y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let usersMenores = [];
let usersMayores = [];
for(const user of users){
  if(user.years < 18){
    usersMenores.push(user);
  } else {
    usersMayores.push(user);
  }
}
console.log("Usuarios menores de edad: " );
for(const user of usersMenores){
  console.log(user.name);
}
console.log("Usuarios mayores de edad:")
for(const user of usersMayores){
  console.log(user.name);
}

//------ Ejercicio 22 -----------
//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let contadorFrutas = 0;
for(let i=0; i<foodSchedule.length; i++){
  if(foodSchedule[i].isVegan == false){
    foodSchedule[i].name = fruits[contadorFrutas];
    contadorFrutas++;
  } else {
    contadorFrutas++;
  }
}
console.log(foodSchedule);

//------------- Ejercicio 23 -------------
//Usa un bucle para crear 3 arrays de películas filtrados por categorías.
//Pelicula pequeña -> menos de 100 minutos, 
// película mediana -> más de 100 minutos y menos de 200  
// pelicula grande -> más de 200 minutos.
//Imprime cada array por consola.
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
let peliculaPequena = [];
let peliculaMediana = [];
let peliculaGrande = [];
for(const pelicula of movies){
  if(pelicula.durationInMinutes < 100){
    peliculaPequena.push(pelicula);
  } else if(pelicula.durationInMinutes >= 100 && pelicula.durationInMinutes <= 200){
    peliculaMediana.push(pelicula);
  } else if(pelicula.durationInMinutes > 200){
    peliculaGrande.push(pelicula);
  }
}
console.log("Peliculas Pequeñas");
console.log(peliculaPequena);
console.log("Peliculas Medianas");
console.log(peliculaMediana);
console.log("Peliculas Grandes");
console.log(peliculaGrande);

//---------- Ejercicio 24 ---------
//Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.
const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
console.log(characters);
const humanCharacters = [];
for(let i=0; i<characters.length; i++){
  if(characters[i].species == 'Human'){
    humanCharacters.push(characters[i].name);
  }
}
console.log(humanCharacters);

//-------- Ejercicio 25 --------
//Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
const movies3 = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let peliAntes2000 = 0;
let peliDespues2000 = 0;
for(let i=0; i<movies3.length; i++){
  if(movies3[i].releaseYear < 2000){
    peliAntes2000++;
  }
  else {
    peliDespues2000++;
  }
}
console.log("Peliculas antes del 2000 = " + peliAntes2000);
console.log("Peliculas despues del 2000 = " + peliDespues2000);

//---------------- Ejercicio 26 -----------------
//Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.
const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
const rockPlaylist = [];
for(let i=0; i<songs.length; i++){
  if(songs[i].genre == 'Rock' && songs[i].duration > 5.0){
    rockPlaylist.push(songs[i]);
  }
}
console.log(rockPlaylist);

//----------- Ejercicio 27 ---------------
//Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.
const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];
let anyoMax = 0;
let nomPeli = "";
for(let i=0; i<cartoons.length; i++){
  if(cartoons[i].debut > anyoMax){
    anyoMax=cartoons[i].debut;
    nomPeli=cartoons[i].name;
  }
}
console.log("La pelicula mas antigua del array es: " +nomPeli);

//------------- Ejercicio 28 ---------------
//Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola.

const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];
let sumaRock = 0;
for(let i=0; i<albums.length; i++){
  if(albums[i].genre == "Rock"){
    sumaRock += albums[i].duration;
  }
}
console.log("La suma de todos los albums de Rock = " + sumaRock);

//-------- Ejercicio 29 ---------
//Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const starWarsDecadas = [
  {decada: 1970, peliculas: []},
  {decada: 1980, peliculas: []},
  {decada: 1990, peliculas: []},
  {decada: 2000, peliculas: []},
  {decada: 2010, peliculas: []}
];
let anio = 0;
for(let i=0; i<starWarsMovies.length; i++){
  anio = starWarsMovies[i].releaseYear;
  console.log(anio);
  switch(true){
    case (anio >= 1970 && anio <= 1979):
      starWarsDecadas[0].peliculas.push(starWarsMovies[i].title);
      console.log("Entro");
      break;
    case (anio >= 1980 && anio <= 1989):
      starWarsDecadas[1].peliculas.push(starWarsMovies[i].title);
      break;
    case (anio >= 1990 && anio <= 1999):
      starWarsDecadas[2].peliculas.push(starWarsMovies[i].title);
      break;
    case (anio >= 2000 && anio <= 2009):
      starWarsDecadas[3].peliculas.push(starWarsMovies[i].title);
      break;
    case (anio >= 2010 && anio <= 2019):
      starWarsDecadas[4].peliculas.push(starWarsMovies[i].title);
      break;      
    default:
      console.log("No existe decada para esta pelicula");
      break;    
  }
}
console.log(starWarsDecadas);

//------- Ejercicio 30 ----------------
//Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores 
// sean arrays de canciones de ese género.
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const tracksGenre = [
  {genero: 'Metal', canciones: []},
  {genero: 'Rock', canciones: []},
  {genero: 'Pop', canciones: []},
  {genero: 'Country', canciones: []},
  {genero: 'Grunge', canciones: []}
];

for(const element of tracks){
  if(element.genre == 'Metal'){
    tracksGenre[0].canciones.push(element.title);
  }else if(element.genre =='Rock'){
    tracksGenre[1].canciones.push(element.title);
  }else if(element.genre =='Pop'){
    tracksGenre[2].canciones.push(element.title);
  } else if(element.genre =='Country'){
    tracksGenre[3].canciones.push(element.title);
  } else if(element.genre =='Grunge'){
    tracksGenre[4].canciones.push(element.title);
  } 
}
console.log("Array Tracks por genero:");
console.log(tracksGenre);

//------------ Ejercicio 31 -----------
const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];
for(let i=0;i<artists.length;i++){
  console.log("Las influencias del artista " + artists[i].name + " son: ");
  for(let j=0;j<artists[i].influences.length;j++){
    console.log(artists[i].influences[j]);
  }
}

//------ Ejercicio 32 ---------
//Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

const xMen2 = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  let miembroMasAntiguo = "";
  let anioAntiguo = xMen[0].year;
  for(const miembro of xMen){
    if(anioAntiguo > miembro.year){
      miembroMasAntiguo = miembro.name;
    }
  }
  return miembroMasAntiguo;
}
console.log("El miembro mas antiguo de los xMen es: " + findOldestXMen(xMen2));

//----- Ejercicio 33 -------
//Desarrolla una función que reciba un país por parámetro y devuelva su capital.
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  for(const capital in capitals){
    if(capital == country){
      return 'La capital de ' + country + ' es ' + capitals[country];
    }
  }
}
console.log(getCapital('Poland'));

//--------- Ejercicio 34 ----------
//Escribe una función que calcule el promedio de duración de una lista de películas.
const movies4 = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
  let mediaTotal = 0;
  for(const pelicula of movies4){
    mediaTotal += pelicula.duration;
  }

  return mediaTotal/movies.length;
}

console.log(averageMovieDuration(movies4));

//-------- Ejercicio 35 ---------
//Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absortion' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];


function findMutantByPower(mutants, power) {
  for(let i=0; i<mutants.length; i++){
    if(mutants[i].power.includes('power')){
      console.log('Hemos encontrado al mutante ' + mutants[i].name);
      console.log('Con el poder ' + mutants[i].power);
    }
    else {
      console.log('No esta');
    }
  }
}
findMutantByPower(mutants, 'power');

//--------- Ejercicio 36 --------
//Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];
let añoActual = new Date().getFullYear();
const actorsEdad = [];
function calculateActorsAges(actors) {
  let edad = 0;
  let actor;
  for(let i=0; i<actors.length; i++){
      actor = [];    
      edad = añoActual - actors[i].born;
      console.log(edad);
      actor.name = actors[i].name;
      console.log(actor.name);
      actor.edad = edad;
      console.log(actor.edad);
      console.log(actor);
      actorsEdad.push(actor);
  }
}
calculateActorsAges(actors);
console.log(actorsEdad);

//----- Ejercicio 37 --------
//Dado el siguiente código usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
const movies5 = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const categorias = [];
for(const pelicula of movies5){
  let i=0;
  while(i<pelicula.categories.length){
    if(categorias.includes(pelicula.categories[i])){
      i++;
    } else {
      categorias.push(pelicula.categories[i]);
    }
  }
}
console.log(categorias);

//------ Ejercicio 38 -------------
//Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users2 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let volumenTotal = 0;
let contadorCanciones = 0;
for(const usuario of users2){
  let cancionesFavoritas = usuario.favoritesSounds;
  for(const canciones in cancionesFavoritas){
    //console.log(cancionesFavoritas[canciones].volume);
    volumenTotal += cancionesFavoritas[canciones].volume;
    //console.log(volumenTotal);
    contadorCanciones++;
  }
}
console.log("Promedio de volumenes = " + volumenTotal / contadorCanciones);

//------- Ejercicio 39 ------------
//Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
const users3 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
const listaSonidos = [];
let contadorSonidos = 0;
for(const usuario of users3){
  let sonidosFavoritos = usuario.favoritesSounds;
  for(const sonido in sonidosFavoritos){
    const format = sonidosFavoritos[sonido].format;
    listaSonidos.push(format);
  }
}
console.log(listaSonidos);
  for(let i=0; i<listaSonidos.length; i++){
    let sonido = listaSonidos[i];
    for(let j=0; j<listaSonidos.length;j++){
      if(listaSonidos[j] == sonido){
        contadorSonidos++;
      }

    }
    console.log("El sonido " + sonido + " se repite " + contadorSonidos);  
    if(sonido == listaSonidos[i]){
      break;
      contadorSonidos = 0;      
    }  
  
  }

//---------- Ejercicio 40 -----------
//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
function findArrayIndex(array, text) {
  let posicion = 0;  
  for(let i=0;i<array.length;i++){
    if(array[i] == text){
      posicion = i;
      return posicion;
    }
  }
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
console.log(mainCharacters);
//let indiceArray = findArrayIndex(mainCharacters, "Anakin");
//console.log("El indice del array es " + indiceArray);
function removeItem(array, text){
  let indiceArray = findArrayIndex(array,text);
  array.splice(indiceArray,1);
  return array;
}
const mainCharactersModificado = removeItem(mainCharacters,"Anakin");
console.log("Queremos eliminar Anakin y el nuevo array queda de la siguiente manera:");
console.log(mainCharactersModificado);

//--------- Ejercicio 41 -------------
//Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.
function rollDice(carasDado){
  const dado = Math.floor(Math.random() * carasDado) + 1;
  return dado;
}
const tiradaDado = rollDice(6);
console.log("Tu tirada en el dado es " + tiradaDado);

//------ Ejercicio 42 -------------
//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
function swap(array,posicion1,posicion2){
  [array[posicion1-1], array[posicion2-1]] =[array[posicion2-1],array[posicion1-1]];
}
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
console.log(fantasticFour);
console.log("El nuevo array despues de intercambiar las posiciones es:");
swap(fantasticFour,2,3);
console.log(fantasticFour);