const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let objetivo = null;

function pedirObjetivo() {
  rl.question("Define el número secreto (N): ", (txt) => {
    const n = Number(txt);

    if (!Number.isFinite(n)) {
      console.log("Por favor ingresa un número válido.");
      return pedirObjetivo();
    }

    objetivo = n;
    console.log("Listo. Ahora intenta adivinarlo.");
    pedirIntento();
  });
}

function pedirIntento() {
  rl.question("Adivina el número: ", (txt) => {
    const intento = Number(txt);

    if (!Number.isFinite(intento)) {
      console.log("Por favor ingresa un número válido.");
      return pedirIntento();
    }

    if (intento < objetivo) {
      console.log("Mayor");
      return pedirIntento();
    }

    if (intento > objetivo) {
      console.log("Menor");
      return pedirIntento();
    }

    console.log("¡Correcto! Adivinaste el número.");
    rl.close();
  });
}

pedirObjetivo();