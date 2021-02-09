//Generators
function* helloGenerator(){
    let index = 1;
    while (true) {
        yield index++;
    }
}
const generator = helloGenerator();
console.log(generator);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);