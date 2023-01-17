/* Write a program to get a sorted array of objects ordered by properties and orders. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }
}

const sijo = new Person("Sijo", 22);
const raj = new Person("Raj", 23);
const shivam = new Person("Shivam", 20);
const shivam2 = new Person("Shivam", 21);

const arr = [sijo, raj, shivam, shivam2];

// ravi = arr[1];

arr.sort((a, b) => {
  const val = a.getName.localeCompare(b.getName);
  if (val != 0) {
    return val;
  } else {
    console.log("hello");
    return b.getAge - a.getAge;
  }
});

console.log(arr);
