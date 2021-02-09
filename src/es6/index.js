function newFunction(name, age, country){
    var name = name || 'Daniel';
    var age = age || 18;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Daniel', age = 18, country = 'MX'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('Sandra', 21, 'MX');

//Template String
let hello = 'Hello', world = 'World';
let epicPhrase = hello + ' ' + world;

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);
console.log(epicPhrase2);

//Multilínea
let componentCSS = 'margin: 2px;\n'
+'font-size: 3em;\n'
+'color: black;';
//es6

let formCSS = `margin: 2vw;
display: flex;
align-items: center;`;

console.log(componentCSS);
console.log('ES6');
console.log(formCSS);

//Destructuring
const person = {
    name: 'Daniel',
    age: 18,
    country: 'MX',
};
console.log(person.name, person.age, person.country);

const { name, age} = person;
console.log(name, age);

const countries = ['MX', 'US', 'CO', 'UK', 'IT'];
const countries2 = ['FR', 'MX'];

countries2.forEach((e) => {
    console.log(countries.includes(e))
});
console.log(...countries);

const names = [
    { name: 'Daniel', age: 18},
    { name: 'Sandra', age: 21}
];
const listOfNames = names.forEach((e) =>{
    console.log(e);
});

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey:)');
        } else {
            reject('Ups!');
        }
    })
};

helloPromise()
.then(response => console.log(response))
.catch(error => console.error(error));


//Clases
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    rest(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(1, 6));
console.log(calc.rest(1, 6));

import { hello } from './module';
hello();

//Generators
function* functionGenerator(){
    let index = 1;
    while (true) {
        yield index++;
    }
}
const generator = functionGenerator();
console.log(generator);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);