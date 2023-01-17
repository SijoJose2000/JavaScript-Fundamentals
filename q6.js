// Write a program to filter out the non-unique values in an array.

let arr = [1, 2, 3, 4, 4, 5, 5, 5];

/////////////////////////////////////////////////////

// for (let i = 0; i < arr.length; i++) {
//   let flag = true;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] == arr[j] && i != j) {
//       flag = false;
//       break;
//     }
//   }

//   if (!flag) {
//     arr = arr.filter((value) => value != arr[i]);
//   }
// }

///////////////////////////////////////////////

//Checking the index and last index

newArr = arr.filter((val, index) => arr.indexOf(val) === arr.lastIndexOf(val));

console.log(newArr);
