//const { createElement } = require("react");
console.log("hola");
//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoDiv = document.createElement("div");
document.querySelector("body").appendChild(nuevoDiv);
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let nuevoP = document.createElement("p");
document.querySelector("body").appendChild(nuevoP);
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript
let divParrafo6 = document.createElement("div");
divParrafo6.id = "parrafo6";
document.querySelector("body").appendChild(divParrafo6);
let i=0;
while(i<6){
    let parrafo = document.createElement("p");
    document.getElementById("parrafo6").appendChild(parrafo);
    i++;
}
//2.4 Inserta dinamicamente con javascript en un html una p con eltexto 'Soy dinámico!'.
let parrafoDinamico = document.createElement("p");
let textoDinamico = document.createTextNode("Soy Dinamico!");
parrafoDinamico.appendChild(textoDinamico);
document.querySelector("body").appendChild(parrafoDinamico);
//2.5.Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2Texto = document.createTextNode("Wubba Lubba dub dub");
document.querySelector(".fn-insert-here").appendChild(h2Texto);
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for(let i=0; i<apps.length; i++){
    const li = document.createElement("li");
    li.textContent = apps[i];
    ul.appendChild(li);
}
document.querySelector("body").appendChild(ul);
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let listaRemove = document.querySelectorAll(".fn-remove-me");
// Recorre la lista y elimina cada uno
listaRemove.forEach(elemento => elemento.remove());
//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	//Recuerda que no solo puedes insertar elementos con .appendChild.
const divSelector = document.querySelector("div");
let parrafoEnMedio = '<p>Voy en Medio!</p>';
divSelector.innerHTML = parrafoEnMedio;   
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let listaInsert = document.querySelectorAll("div.fn-insert-here");
//const classSelector = document.querySelector("");
for(const element of listaInsert){
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    element.appendChild(p);
}
