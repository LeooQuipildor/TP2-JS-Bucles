let numero = parseInt(prompt("Ingresar un numero entre 1 y 50"));

if(!isNaN(numero)){
    if(numero >= 1 && numero <=50){
        for (let i = numero; i >= 1; i--) {
            for (let j = 0; j < i; j++) {
                document.write(i);
            }
            document.write(`<br>`);
        }
    }
    else{
        alert("Numero invalido!, Ingresar un numero entre el 1 y el 50");
    }
    
}
else{
    alert("ERROR! Ingresar solamente numeros");
}
