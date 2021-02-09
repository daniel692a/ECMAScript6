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