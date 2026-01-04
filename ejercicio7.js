const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalFacturacion = 0;
let litrosArticulo1 = 0;
let facturasMasDe600 = 0;

let i = 1;

function pedirFactura() {
  rl.question(
    `Factura ${i}/5 (ingresa: codigo litros precioPorLitro): `,
    (txt) => {
      const partes = txt.trim().split(/\s+/);

      if (partes.length !== 3) {
        console.log("Formato inválido. Ejemplo: 1 10 75");
        return pedirFactura();
      }

      const codigo = Number(partes[0]);
      const litros = Number(partes[1]);
      const precio = Number(partes[2]);

      if (!Number.isInteger(codigo) || !Number.isFinite(litros) || !Number.isFinite(precio) || litros < 0 || precio < 0) {
        console.log("Datos inválidos. Revisa que sean números y que litros/precio no sean negativos.");
        return pedirFactura();
      }

      const importe = litros * precio;

      totalFacturacion += importe;
      if (codigo === 1) litrosArticulo1 += litros;
      if (importe > 600) facturasMasDe600++;

      i++;
      if (i <= 5) return pedirFactura();

      console.log("Facturación total:", totalFacturacion);
      console.log("Litros vendidos del artículo 1:", litrosArticulo1);
      console.log("Facturas de más de 600:", facturasMasDe600);

      rl.close();
    }
  );
}

pedirFactura();