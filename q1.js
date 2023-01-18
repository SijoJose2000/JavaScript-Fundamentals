// Write a program to compare two objects and return true or false

const obj1 = {
  name: "sijo",
  age: 22,
};

const obj2 = {
  name: "sijo",
  age: 22,
};

let obj3 = {
  name: "Sijo's Friend",
  age: 22,
};

let obj4 = {
  name: "Sijo's Friend",
  age: 22,
};

obj1["obj"] = obj3;
obj2["obj"] = obj4;

// This will not work if the order of the keys are changed
console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
