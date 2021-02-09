//Operador rest
const user = {
    name: 'Daniel',
    age: 18,
    country: 'MX',
};
const { country, ...rest } = user;
console.log(rest);
//Asi copio las keys y properties del objeto sin dañar los datos el otro objeto
const user2 = {
    ...user,
    job: 'frontend dev',
};

console.log(user2);


//Finally en Promises
const helloWorld = () => new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Hello World'), 10000)
        : reject(new Error('Chale, salió mal'));
})

helloWorld()
.then(response => console.log(response))
.catch(err => console.error(err))
//Finally se ejecuta aun si pasa el error o se completa correctamente
.finally(() => console.log('Proceso terminado'));

//Mejora al trabajar el RegEx
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexDate.exec('2021-02-08');
const year = match[1];
const month = match[2];
const day = match[3];
console.table(match);
console.log(year, month, day);