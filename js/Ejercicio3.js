let cadenasConcatenadas = "";

do {
    let texto = prompt("Ingresar cadena de texto");
    if (cadenasConcatenadas == "") {
        cadenasConcatenadas = cadenasConcatenadas + texto;
    }
    else {
        cadenasConcatenadas = cadenasConcatenadas + "-" + texto;
    }
}
while(confirm("Quiere seguir?")){
    document.write(`${cadenasConcatenadas}`);
}