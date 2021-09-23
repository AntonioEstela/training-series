const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "a"],
];

/* 
  El input llega como una matriz
  
  Despues con el primer reduce lo convierto en un solo array:
  ["a", "b", "c", "c", "d", "f", "d", "f", "a"]

  Como siguiente paso uso un reduce inicializado con un objeto para empezar a contar.

  si el elemento actual ya esta en el objeto, lo unico que hacemos es sumar 1,
  de lo contrario significa que no esta, por lo tanto lo igualamos a 1:
  {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
 */
const getCountOfElements = (input) => {
  input.reduce((a, c) => a.concat(c), [])
    .reduce((a, c) => {
      a[c] ? (a[c] += 1) : (a[c] = 1);
      return a;
    }, {});
};

getCountOfElements(input);

const song = ["what", "a", "wonderful", "world"];

// method 1
song.length = 0;

// method 2

// song -> []
