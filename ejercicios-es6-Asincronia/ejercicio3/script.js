//3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const usersName = users.map((user) => user.name);
console.log("El vector solo con los nombres es: " + usersName);

//3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const userNameAChange = usersName.map((user) => 
	{
		if (user.startsWith('A')) {
			user = "Anacleto";
			return user;
		}
		return user;
	}
);
console.log("El nuevo vector de nombres con la letra que empieza por A cambiado: " + userNameAChange);

//3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];
const citiesVisited = cities.map((city) => 
{
	if(city.isVisited == true){
		city.visitado = "Visitado";
		return city.name + " " + city.visitado; 
	}
}
);
console.log("El nuevo vector con las ciudades visitadas es: " + citiesVisited);