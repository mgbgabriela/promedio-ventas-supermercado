let primerSemestre: number[] = [234, 345, 560, 230, 765, 79]; //368.83
let segundoSemestre: number[] = [145, 876, 367, 290, 100, 356]; //355.66

let i: number = 0;

function obtenerPromedioSemestral(array: number[], longitud: number): number {
  let suma: number = 0;
  let promedio: number = 0;
  for (i = 0; i < longitud; i++) {
    suma += array[i];
  }
  promedio = suma / longitud;
  return promedio;
}

function obtenerPromedioAnual(
  array1: number[],
  array2: number[],
  longitud: number
): number {
  let suma: number = 0;
  let promedio: number = 0;
  for (i = 0; i < longitud; i++) {
    suma += array1[i] + array2[i];
  }
  promedio = suma / (longitud * 2);
  return promedio;
}

let mesesPrimerSemestre: string[] = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio"
];
let mesesSegundoSemestre: string[] = [
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviember",
  "diciembre"
];

function obtenerMaximaVenta(
  array: number[],
  meses: string[],
  longitud: number
): string {
  let max: number = 0;
  let mesMayor: string = " ";
  let texto: string = " ";
  for (i = 0; i < longitud; i++) {
    if (array[i] > max) {
      max = array[i];
      mesMayor = meses[i];
    }
  }
  texto = `La venta masxima del semestre fue: ${max} y fue en el mes ${mesMayor}`;
  return texto;
}

console.log(
  `Promedio primer semestre ${obtenerPromedioSemestral(primerSemestre, 6)}`
);
console.log(
  `Promedio segundo semestre ${obtenerPromedioSemestral(segundoSemestre, 6)}`
);

console.log(
  `Promedio anual es ${obtenerPromedioAnual(
    primerSemestre,
    segundoSemestre,
    6
  )}`
);

console.log(obtenerMaximaVenta(primerSemestre, mesesPrimerSemestre, 6));
console.log(obtenerMaximaVenta(segundoSemestre, mesesSegundoSemestre, 6));
