//crie uma array com 5 nomes de paises
const nomePaises= ["Brasil", "Chile", "Cuba", "Italia", "França"];

//adicione um pais ao fim da lista
nomePaises.push("Alemanha");
console.log(nomePaises);

//remova um pais do fim da lista
nomePaises.pop();
console.log(nomePaises);

//adicione um pais ao inicio da lista
nomePaises.unshift("Uruguai");
console.log(nomePaises);

//remova um pais do inicio da fila
nomePaises.shift();
console.log(nomePaises);

//imprima o ulimo pais da lista
console.log(nomePaises[nomePaises.length-1]);

//imprima o segundo pais da lista
console.log(nomePaises[1]);

//imprime a instancia 2
console.log(nomePaises[2]);