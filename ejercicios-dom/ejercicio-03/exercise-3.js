//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");
for(let i=0; i<countries.length; i++){
    const li = document.createElement("li");
    li.textContent = countries[i];
    ul.appendChild(li);
}
document.querySelector("body").appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let borrar = document.querySelector(".fn-remove-me");
borrar.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul1 = document.createElement("ul");
for(let i=0; i<cars.length; i++){
    const li = document.createElement("li");
    li.textContent = cars[i];
    ul1.appendChild(li);
}
document.querySelector('[data-function="printHere"]').appendChild(ul1);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.
const randomTitle = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const contenedor = document.querySelector("body");
const divRandom = document.createElement("div");
divRandom.id = "random";
contenedor.appendChild(divRandom);
const contenedorRandom = document.querySelector("#random");

randomTitle.forEach(elemento => {
  const div = document.createElement("div");
  div.id = "rand";
  contenedorRandom.appendChild(div);
  const divSelector = document.querySelector("#rand");
  const h4 = document.createElement('h4');
  h4.textContent = elemento.title;
  const imagen = document.createElement("img");
  imagen.src = elemento.imgUrl;
  divSelector.appendChild(h4);
  divSelector.appendChild(imagen);
  contenedorRandom.appendChild(divSelector);
});

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const boton = document.createElement("button");
boton.id = 'botonEliminar';
boton.textContent = 'Eliminar Ultimo Elemento';
divRandom.appendChild(boton);
boton.addEventListener("click",(ev) => {
    const randoms = document.querySelectorAll('div#rand');
    if(randoms.length >0){
        console.log("Longitud de random " + randoms.length);
        const ultimoRandom = randoms[randoms.length -1];
        ultimoRandom.remove();
    }
});

//1.6.1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const divSelector2 = document.querySelectorAll("#rand");
divSelector2.forEach(elemento => {
    const botonEliminarDiv = document.createElement("button");
    botonEliminarDiv.id = 'botonEliDir';
    botonEliminarDiv.textContent = "Elimina DIV";
    elemento.appendChild(botonEliminarDiv);
    botonEliminarDiv.addEventListener("click",(evEliminar) => {
        if(divSelector2.length > 0){
            elemento.remove();
        }
    });
});