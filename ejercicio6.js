const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pedirNumero() {
  rl.question("Ingresa un número entre 0 y 10: ", (txt) => {
    const n = Number(txt);

    if (!Number.isInteger(n) || n < 0 || n > 10) {
      console.log("Número inválido. Debe ser un entero entre 0 y 10.");
      return pedirNumero();
    }

    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }

    rl.close();
  });
}

pedirNumero();