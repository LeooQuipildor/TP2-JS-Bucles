let sumatoria = 0;
do {
    let numero = parseInt(prompt("Ingresar numero"));
    if (!isNaN(numero)) {
        sumatoria = sumatoria + numero;
    }
    else {
        alert("Ingresar solo numeros enteros!");
    }
}
while (confirm("Desea seguir?")) {
    document.write(`${sumatoria}`);
}