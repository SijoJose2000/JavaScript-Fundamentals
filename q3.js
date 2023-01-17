/* Write a program to convert an array of objects to a string. That contains
dynamic columns and de limiter specified.*/

inputString = [
  { col1: "a", col2: "b" },
  { col1: "c", col2: "d" },
];

//Using custom delimeter
const delimeter = ",";

//Getting the column Names and adding it into string
colName = Object.keys(inputString[0]);
let str = colName.join(delimeter);

//Loop through each object in array get it's values and adding it into the existing string
inputString.forEach((v) => {
  str = str + "\n";
  values = Object.values(v);

  str = str + values.join(delimeter);
});

console.log(str);
