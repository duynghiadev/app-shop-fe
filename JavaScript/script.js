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

// array
const arr1 = ["html", "css"];
arr1.forEach((item) => {
  console.log("item:", item);
});

const result = arr1.map((item, index) => {
  console.log("item.map:", item, index);
});

// filter
const result2 = arr1.filter((item) => {
  return item.length > 3;
});
console.log("result2:", result2);

// reduce
const result3 = arr1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.length;
}, 0);
console.log("result3:", result3);

// sort
const arr2 = [3, 1, 2, 5, 4];
const result4 = arr2.sort((a, b) => {
  return a - b;
});
console.log("result4:", result4);

// spread operator
const arr3 = [...arr1, "javascript", "react"];
console.log("arr3:", arr3);
console.log("arr1:", arr1);

// rest operator
function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}
console.log("sum:", sum(1, 2, 3, 4, 5));

// template string
const name = "javascript";
const price = 200;
const message = `I bought ${name} at $${price}`;
console.log("message:", message);

// destructuring
const obj = { name: "javascript", price: 200 };
const { name: newName, price: newPrice } = obj;
console.log("newName:", name);
console.log("newPrice:", newPrice);

// enhance object literal
const person = { name1: "John Doe", age: 30 };
const { name1, age, ...rest } = person;
const updateRest = { ...rest, job: "Developer", location: "New York" };
console.log("name1:", name1);
console.log("age:", age);
console.log("rest:", rest);
console.log("updateRest:", updateRest);
