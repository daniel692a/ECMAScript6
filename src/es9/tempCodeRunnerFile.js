//Mejora al trabajar el RegEx
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexDate.exec('2021-02-08');
const year = match[1];
const month = match[2];
const day = match[3];
console.table(match);
console.log(year, month, day);