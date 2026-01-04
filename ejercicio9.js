for (let n = 0; n <= 99999; n++) {
  const cincoDigitos = String(n).padStart(5, "0");

  const salida = cincoDigitos
    .split("")
    .map((d) => (d === "3" ? "E" : d))
    .join("-");

  console.log(salida);
}