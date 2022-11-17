const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] === 10){
        console.log(i-1);
        encontrado= true;
        break; 
    }
}
if (encontrado === false){
    console.log(-1);
}