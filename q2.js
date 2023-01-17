/* Write a program to convert string to a 2D array of objects. The first row of the 
string is used as the title. */

// inputString = "col1,col2\na,b\nc,d\ne,f";

// colName = inputString.slice(0, inputString.indexOf("\n")).split(",");

// newData = inputString.slice(inputString.indexOf("\n") + 1).split("\n");

// console.log(
//   newData.map((v) => {
//     [val1, val2] = v.split(",");
//     a = {};
//     a[colName[0]] = val1;
//     a[colName[1]] = val2;
//     return a;
//   })
// );

////////////////////////////////////////////////////////////////////////////////////////
// inputString = "col1,col2\na,b\nc,d\ne,f";
inputString = "col1,col2,col3,col4\na,b,c,d\ne,f,g,h\ni,j,k,l";

// Getting the columnName array by slice and split
colName = inputString.slice(0, inputString.indexOf("\n")).split(",");
// Getting the count of the column from the columnName array
colCount = colName.length;
// Now getting newData without the column name
newData = inputString.slice(inputString.indexOf("\n") + 1).split("\n");

// Mapping each value with an object
console.log(
  newData.map((v) => {
    val = v.split(",");
    a = {};

    for (let i = 0; i < colCount; i++) {
      a[colName[i]] = val[i];
    }
    return a;
  })
);
