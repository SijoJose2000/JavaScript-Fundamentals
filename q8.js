/* Write a program to get a sorted array of objects ordered by properties and orders. */

const person = [
  { name: "Sijo", age: 22 },
  { name: "Ravi", age: 26 },
  { name: "Sijo", age: 24 },
  { name: "Raj", age: 22 },
  { name: "Jaadu", age: 21 },
  { name: "Jaadu", age: 28 },
];

const orderedBy = ["name", "age"];
const orders = ["asc", "desc"];

person.sort((obj1, obj2) => {
  for (let i in orderedBy) {
    if (obj1[orderedBy[i]] == obj2[orderedBy[i]]) continue;

    if (orders[i] === "asc") {
      return obj1[orderedBy[i]] > obj2[orderedBy[i]] ? 1 : -1;
    }

    return obj1[orderedBy[i]] > obj2[orderedBy[i]] ? -1 : 1;
  }
});

console.log(person);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get getName() {
//     return this.name;
//   }

//   get getAge() {
//     return this.age;
//   }
// }

// const sijo = new Person("Sijo", 22);
// const raj = new Person("Raj", 23);
// const shivam = new Person("Shivam", 20);
// const shivam2 = new Person("Shivam", 21);

// const arr = [sijo, raj, shivam, shivam2];

// // ravi = arr[1];

// arr.sort((a, b) => {
//   const val = a.getName.localeCompare(b.getName);
//   if (val != 0) {
//     return val;
//   } else {
//     console.log("hello");
//     return b.getAge - a.getAge;
//   }
// });

// console.log(arr);
