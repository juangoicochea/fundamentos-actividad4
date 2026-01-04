const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contador = 0;

let sumaPos = 0;
let cantPos = 0;

let sumaNeg = 0;
let cantNeg = 0;

let cantCeros = 0;

function pedirNumero() {
  rl.question(`Ingresa el número ${contador + 1} de 10: `, (txt) => {
    const n = Number(txt);

    if (!Number.isFinite(n)) {
      console.log("Por favor ingresa un número válido.");
      return pedirNumero();
    }

    contador++;

    if (n === 0) {
      cantCeros++;
    } else if (n > 0) {
      sumaPos += n;
      cantPos++;
    } else {
      sumaNeg += n;
      cantNeg++;
    }

    if (contador < 10) return pedirNumero();

    const mediaPos = cantPos > 0 ? sumaPos / cantPos : 0;
    const mediaNeg = cantNeg > 0 ? sumaNeg / cantNeg : 0;

    console.log("Media de positivos:", mediaPos);
    console.log("Media de negativos:", mediaNeg);
    console.log("Cantidad de ceros:", cantCeros);

    rl.close();
  });
}

pedirNumero();