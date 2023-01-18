/* Write a program to convert an array of objects to a string. That contains
dynamic columns and de limiter specified.*/

inputString = [
  { col1: "a", col2: "b" },
  { col1: "f", col2: "g", col3: "h", col4: "i" },
  { col1: "c", col2: "d", col3: "e" },
];

//Using custom delimeter
const delimeter = ",";

let ind = 0;

// Getting the column having the largest index
inputString.forEach((value, index) => {
  if (Object.keys(inputString[ind]).length < Object.keys(value).length) {
    ind = index;
  }
});

//Getting the column Names and adding it into string
colName = Object.keys(inputString[ind]);
let str = colName.join(delimeter);

//Loop through each object in array get it's values and adding it into the existing string
inputString.forEach((v) => {
  str = str + "\n";
  values = Object.values(v);

  str = str + values.join(delimeter);
});

console.log(str);
