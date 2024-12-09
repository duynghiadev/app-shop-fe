// arrow function
const sumNumber = (a, b) => {
  return a + b;
};
console.log("total:", sumNumber(1, 2));

function sumNumber2(a, b) {
  return a + b;
}
console.log("total:", sumNumber2(1, 5));

// loop
const countNumber = (sum) => {
  for (let i = 0; i <= sum; i++) {
    console.log("i:", i);
  }
};
countNumber(2);

const arr = [
  {
    name: "javascript",
    price: 200,
  },
  {
    name: "html",
    price: 400,
  },
];

const logName = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("name:", arr[i]);
  }

  for (const item of arr) {
    console.log("for...of:", item);
  }

  for (const item in arr) {
    console.log("for...in:", arr[item]);
  }

  arr.forEach((item) => {
    console.log("forEach:", item);
  });
};
logName(arr);
