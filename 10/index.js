const numeros = [8, 11, 4, 1];

let diferenca = 0;

for (const item1 of numeros) {
  for (const item2 of numeros) {
    if ((item1 - item2) > diferenca) {
      diferenca = (item1 - item2)*1;
    }
  }
}

console.log(diferenca)
