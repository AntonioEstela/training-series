const input = "kubernetes accessibility"; // -> k8s a11y

// accessibility
// a-----11----y
// length = 13
// letters = 2
// length - 2

// FIND NUMBER WITH LETTERS
const findNumberWithLetter = (input) =>
  input.split(" ").map((item) => {
    const num = item.length - 2;
    const [first, last] = [item.charAt(0), item.slice(-1)];
    return first + num + last;
  });

findNumberWithLetter(input); // -> ['k8s', 'a11y']

// FACTORIAL NUMBER
const findFactorialRec = (num) => (num < 2 ? 1 : num * findFactorial(num - 1));

const findFactorial = (num) => {
  const result = 1;

  if (!num < 2) {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  }
  return result;
};

findFactorial(num); // -> num!
findFactorialRec(num); // -> num!

// TREAT ARRAY
const arr = [1, 2, 4, 5, 6];
const names = ["John", "Doe", "Jane", "Roman", "Weller", "Patterson"];

const treatArray = (arr) => arr.map((item, index) => new Object({ id: item, name: names[index] ? names[index] : undefined }));

treatArray(arr); // -> [{id:1, name:'John'}, {id:2, name:'Doe'}, ...]
