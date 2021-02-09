const data = {
    frontend: 'Daniel',
    backend: 'Yagel',
    design: 'Indra',
}
//Método entries
//Me da un arreglo con las llaves y propiedades del Object
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
    frontend: 'Daniel',
    backend: 'Yagel',
    design: 'Indra',
}
//Values -> devuelve un array
const values = Object.values(data2);
console.log(values);

//Paddings
let message = 'hello';
//Een el primer parámetro debo dar el numero de caracteres para añadir + el numero de caracteres de la cadena donde deseo insertar
console.log(message.padStart(8, 'hi '));
//Si no son suficientes los valores de maxlength, el padStart no me va añadir mis caracteres, pero en padStart si corta hasta donde le indique
console.log(message.padEnd(9, ' Daniel'));

//Async - await
//Construyo una promesa
const helloWorld = () => new Promise((resolve, reject) =>{
    (true) ? setTimeout(() => resolve('Hello World'), 2000) : reject(new Error('Chale'));
});
//Voy a construir mi function async
const helloAsync = async () => {
    try{
        const execution = await helloWorld();
        console.log(execution);
    } catch(error){
        console.error(error);
    }
}
helloAsync();