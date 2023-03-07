let texto = prompt("Ingresar texto");
let longitud = texto.length;
let textoInvertido = "";

for(let i = 0; i<longitud;i++){
    let j = texto.charAt(i);
    textoInvertido = j + textoInvertido;
}
document.write(textoInvertido);