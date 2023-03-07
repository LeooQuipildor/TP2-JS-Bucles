let texto = prompt("Ingresar texto: ");
let vocales = ["a", "e", "i", "o", "u"];
let vocalesEn = [];

for (let i = 0; i < texto.length; i++) {
    let minuscula = texto[i].toLowerCase();
    if (vocales.includes(minuscula) && !vocalesEn.includes(minuscula)) {
        vocalesEn.push(minuscula);
    }
}
document.write(`Las vocales que aparecen en la frase (${texto}) son (${vocalesEn.join(", ")})`);
