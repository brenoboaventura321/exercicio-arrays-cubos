const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
const arrayFinal = [];

for (const item of numeros) {
  if (item % 2 === 0) {
    arrayFinal.push(item);
  }
}

let soma = 0;

for (const item2 of arrayFinal) {
  soma += item2;
}

console.log(soma);
