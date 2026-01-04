const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar() {
  rl.question("Ingresa un número (negativo para salir): ", (input) => {
    const numero = Number(input);

    if (Number.isNaN(numero)) {
      console.log("Eso no es un número. Intenta de nuevo.");
      return preguntar();
    }

    if (numero < 0) {
      console.log("Terminó: ingresaste un número negativo.");
      return rl.close();
    }

    console.log(`El cuadrado de ${numero} es ${numero * numero}`);
    preguntar();
  });
}

preguntar();