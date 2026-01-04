const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let contador = 0;
let maxSueldo = null;

function pedirN() {
  rl.question("¿Cuántos sueldos vas a ingresar (N)? ", (txt) => {
    n = Number(txt);

    if (!Number.isInteger(n) || n <= 0) {
      console.log("N debe ser un entero mayor que 0.");
      return pedirN();
    }

    pedirSueldo();
  });
}

function pedirSueldo() {
  rl.question(`Ingresa el sueldo ${contador + 1} de ${n}: `, (txt) => {
    const sueldo = Number(txt);

    if (!Number.isFinite(sueldo) || sueldo < 0) {
      console.log("Sueldo inválido. Ingresa un número válido (>= 0).");
      return pedirSueldo();
    }

    if (maxSueldo === null || sueldo > maxSueldo) {
      maxSueldo = sueldo;
    }

    contador++;

    if (contador < n) return pedirSueldo();

    console.log("El sueldo máximo es:", maxSueldo);
    rl.close();
  });
}

pedirN();