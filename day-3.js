const input = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'a'],
];

const getCountOfElements = (input) => {
  const countObj = {};

  input.forEach(element => {
    element.map(item => countObj[item] ? countObj[item] += 1 : countObj[item] = 1);
  });

  return countObj;
}

getCountOfElements(input);

/*
{
  a: 1,
  b: 1,
  c: 2,
  d: 2,
  f: 2,
  g: 1,
}
*/


const song = ["what", "a", "wonderful", "world"];

// method 1
song.length = 0;

// method 2

// song -> []