// Write a program to compare two objects and return true or false

function compareObject(obj1, obj2) {
  const keys = Object.keys(obj1);

  //Checking if the object has same number of keys
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }

  //Checking if either they are referencing the same object if they are returning true
  if (Object.is(obj1, obj2)) {
    return true;
  }

  for (let i of keys) {
    //Making sure it is an object or not
    if (
      typeof obj1[i] === "object" &&
      !Array.isArray(obj1[i]) &&
      obj1[i] !== null
    ) {
      //If it is an object we will compare deeply
      //If the comparision return false we will return false
      if (!compareObject(obj1[i], obj2[i])) {
        return false;
      }
    }

    //Immediately returning false if any of the object doesn't match
    if (obj1[i] != obj2[i]) return false;
  }

  return true;
}

obj1 = {
  name: "sijo",
  age: 22,
};

obj2 = {
  name: "sijo",
  age: 22,
};

obj3 = {
  name: "Sijo's Friend",
  age: 22,
};

obj4 = {
  name: "Sijo's Friend",
  age: 22,
};

obj1["obj"] = obj3;
obj2["obj"] = obj4;

// This will not work if the order of the keys are changed
console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

// for (i of obj1) {
// }

console.log(compareObject(obj1, obj2));
