let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Introduce un texto");
let minuscula = texto.toLowerCase();
let posicion = 0;
let bandera = false;

for (let i = 0; i < minuscula.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (vocales[j] == minuscula.charAt(i)) {
            posicion = i+1;
            bandera = true;
            break;
        }
    }
    if (bandera === true) {
        break;
    }
}
document.write(`La primera vocal de la frase (${texto}) esta en la posicion (${posicion})`);