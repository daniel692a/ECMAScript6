//array.flat
let array = [1, 2, 3, 4, [5, 6, 7, [ 8, 9, 10]], [1, 2, 3, 4]];
//Para poder eliminar subarrays, el parámetro que recibe es la profundidad
console.log(array.flat());
//Flat Map
let array2 = [1, 2, 3, 4, 5];
//Crea un nuevo array donde por medio de una funcion le digo al elemento que hacer
console.log(array2.flatMap((e) => [e, e*5]));//->[1,5, 2,10, 3,15, 4,20, 5,25]

console.log(array2.map((e) => [e, e+2]));//->[ [ 1, 3 ], [ 2, 4 ], [ 3, 5 ], [ 4, 6 ], [ 5, 7 ] ]

let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());//->Borrar espacios al inicio
let world = 'hello world    ';
console.log(world);
console.log(world.trimEnd());

//Si el metodo Object.entries devuelve un arreglo así:
//[['name', 'daniel'], ['age', 18]]
//Podemos tener un arreglo parecido y crear un objeto
const entries = [['heroe', 'Spiderman'], ['name', 'Peter'], ['age', 18]];
console.log(Object.fromEntries(entries));

//Description of symbols
const descriptionSymbol = 'AARD090602HHGRMNA0';
const symbol = Symbol(descriptionSymbol);
console.log(symbol.description);