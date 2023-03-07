let texto = prompt("Ingresar texto:");
let longitud = texto.length;

for (let i = 0; i < longitud; i++) {
    let textoConGuion = texto.charAt(i);

    if (i == longitud - 1) {
        document.write(textoConGuion);
    }
    else {
        document.write(`${textoConGuion} - `);
    }
}