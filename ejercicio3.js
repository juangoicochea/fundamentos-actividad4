let producto = 1;
let impar = 1;

console.log("Números impares que se multiplican:");

for (let i = 0; i < 10; i++) {
  console.log(impar);
  producto *= impar;
  impar += 2;
}

console.log("Producto final:", producto);