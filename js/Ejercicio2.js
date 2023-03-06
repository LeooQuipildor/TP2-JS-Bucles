let nota = parseInt(prompt("Ingresar nota (del 0 al 10)"));

if (!isNaN(nota)) {
    if(nota<=2){
        alert("Muy deficiente!");
    }
    else if(nota === 3 || nota === 4){
        alert("Insufiente!");
    }
    else if(nota === 5 || nota === 6){
        alert("Suficiente!");
    }
    else if(nota === 7){
        alert("Bien!");
    }
    else if(nota === 8 || nota === 9){
        alert("Notable!");
    }
    else if(nota === 10){
        alert("Sobresaliente!");
    }
    else{
        alert("ERROR! Ingrese un numero del 0 al 10");
    }
}
else {
    document.write("Introduce un número válido");
}