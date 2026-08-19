//2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const copiapointsLists = [...pointsList];
console.log(pointsList);
console.log(copiapointsLists);

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiaToy = {...toy};
console.log(toy);
console.log(copiaToy);

//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList4 = [32, 54, 21, 64, 75, 43];
const pointsList5 = [54,87,99,65,32];
const pointsList6 = [...pointsList4, ...pointsList5];
console.log(pointsList4);
console.log(pointsList5);
console.log(pointsList6);

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const toyFusion = {...toy2, ...toyUpdate};
console.log(toy2);
console.log(toyUpdate);
console.log(toyFusion);

//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const [color1, ...resto] = colors;
const [color2, color3, color4, color5] = resto;
const colorsFinal = [color1, color3, color4, color5];
console.log(colorsFinal);