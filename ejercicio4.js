const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa un número entero (>= 0): ", (txt) => {
  const n = Number(txt);

  if (!Number.isInteger(n) || n < 0) {
    console.log("Por favor ingresa un entero válido (>= 0).");
    rl.close();
    return;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  console.log(`El factorial de ${n} es: ${factorial}`);
  rl.close();
});