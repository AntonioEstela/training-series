const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "a"],
];

/* 
  El input llega como una matriz

  Con el .reduce lo que hago es inicializarlo con un objeto con el cual que trabajaremos,
  luego como "c" es un array y necesito iterarlo para llevar las cuentas de los elementos,
  utilizo un .map para ir validando si el elemento se encuentra en el objeto "a" y en caso
  de encontrarlo sumara +1, de lo contrario lo pongo en 1.

  Despues retorno el objeto para que acumule y poder seguir con la siguiente iteracion.
  {a: 2, b: 1, c: 2, d: 2, f: 2}
 */
const getCountOfElements = (input) => {
  return input.reduce((a, c) => {
    c.map((item) => (a[item] ? (a[item] += 1) : (a[item] = 1)));

    return a;
  }, {});
};

getCountOfElements(input);

const song = ["what", "a", "wonderful", "world"];

// method 1
song.length = 0;

// method 2

// song -> []
