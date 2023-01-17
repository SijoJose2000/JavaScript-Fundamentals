// Write a program to replace the names of multiple object keys.

const obj = {
  name: "JJ",
  job: "Programmer",
  age: 22,
};

const renameKey = {
  name: "firstName",
  job: "Role",
};

for (let [key, value] of Object.entries(renameKey)) {
  if (key != value) {
    //Creating the key with the renamedKey and then deleting the original key
    obj[value] = obj[key];
    delete obj[key];
  }
}

console.log(obj);
