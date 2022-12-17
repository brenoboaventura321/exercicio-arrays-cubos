const original = [1, 4, 12, 21, 53, 88, 112];
const arrayFinal = [];

for (const item of original) {
  if (item % 2 === 0) {
    arrayFinal.push(item);
  }
}
console.log(arrayFinal);
