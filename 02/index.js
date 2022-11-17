const letras = ["A", "a", "B", "C", "E", "e"];

let quantLetraE=0;

for (let letra of letras ){
    if(letra==="E" || letra=="e"){
    quantLetraE++;

    }
}

if(quantLetraE !== 0){
    console.log(`Foram encontradas ${quantLetraE} letras "E" ou "e"`);
}else{
    console.log('Não foram encontradas nenhuma letra "E" ou "e" ')
}