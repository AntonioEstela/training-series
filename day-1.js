const input = 'Globant is really cool';

const findInitials = (arr) => {
  return arr.map((item) => item[0]).join('').toUpperCase();
}

findInitials(input.split(' ')); // -> "GIRC"


const input = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];

const arrayOperations = (arr) => {

  const res = arr.filter((item) => item.age).map((item) => item.age).sort(); // Just the age of those objects and then we sort the array

  const [min, max] = [res[0], res[res.length - 1]] // First and last element of the array

  return [min, max, (max - min)]; // [13 /* min */, 67 /* max */, 54 /*diff */]
};

arrayOperations(input);
