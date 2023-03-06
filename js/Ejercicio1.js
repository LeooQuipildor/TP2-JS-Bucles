let edad = parseInt(prompt(`Ingresar la edad con numeros`));

if (!isNaN(edad)) {
    if(edad>=18){
        document.write("Tiene la edad para conducir");
    }
    else{
        document.write("NO tiene la edad para conducir");
    }
}
else {
    document.write("NO ES UN NUMERO");
}