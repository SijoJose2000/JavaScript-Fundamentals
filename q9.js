/* Write a program to remove the key-value pairs to the given keys. */

const obj1 = {
  a: "Sijo",
  b: "Raj",
  c: "Shivam",
  1: "Ravi",
};

console.log(obj1);

//Deleting single key
let deleteKey = "a";

delete obj1[deleteKey];
console.log("After deleting");
console.log(obj1);

//Deleting a given array of keys
deleteKey = ["b", "1"];

deleteKey.forEach((value) => delete obj1[value]);

console.log("After Modification");
console.log(obj1);
