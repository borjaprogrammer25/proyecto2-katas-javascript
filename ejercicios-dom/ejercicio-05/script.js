const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const h1 = document.createElement("h1");
h1.textContent = "Directorio albums";
document.querySelector("body").appendChild(h1);
const ul = document.createElement("ul");
for(let i=0; i<albums.length; i++){
    const li = document.createElement("li");
    li.textContent = albums[i];
    ul.appendChild(li);
}
document.querySelector("body").appendChild(ul);

//en este ejercicio entiendo esto, no se si hay que hacer una web mas completa con unas fotos descripcion por album