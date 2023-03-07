let nombre1 = prompt("Ingresar nombre 1:");
let edad1 = prompt("Ingresar edad 1:");

let nombre2 = prompt("Ingresar nombre 2:");
let edad2 = prompt("Ingresar edad 2:");

let nombre3 = prompt("Ingresar nombre 3:");
let edad3 = prompt("Ingresar edad 3:");

let mayor = Math.max(edad1, edad2, edad3);

if (mayor == edad1) {
    document.write(`El nombre del mayor es: ${nombre1}`);
}
else if (mayor == edad2) {
    document.write(`El nombre del mayor es: ${nombre2}`);
}
else if (mayor == edad3) {
    document.write(`El nombre del mayor es: ${nombre3}`);
}
