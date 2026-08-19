//6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
//los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumaExamenes = exams.reduce((acc, alumno) => acc + alumno.score, 0);
console.log(sumaExamenes);

//6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
//alumnos que esten aprobados usando la función .reduce().
const sumaExAprobados = exams.reduce(
    (acc, alumno) => {
        if(alumno.score >= 5){
           return acc + alumno.score;
        }
        return acc;
    }
,0);
console.log(sumaExAprobados);

//6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const mediaExamenes = exams.reduce((acc, alumno) => (acc + alumno.score/exams.length),0);
console.log(mediaExamenes);