let i, j;
let numero = parseInt(prompt("Ingresar un numero entre el 1 al 50"));

if (!isNaN(numero)) {
    if (numero >= 1 && numero <= 50) {
        for (i = 1; i <= numero; i++) {
            for (j = 1; j <= i; j++) {
                document.write(j);
            }
            document.write("<br>");
        }
    }
    else {
        alert("Numero invalido!, Ingresar un numero entre el 1 y el 50");
    }

}
else {
    alert("ERROR! Ingresar solamente numeros");
}