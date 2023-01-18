/* Write a program to combine the numbers of a given array into an array containing 
all combinations. ( reduce ) */

let arr = [1, 2];

//Getting unique value out of the array
arr = Array.from(new Set(arr));

const newArray = arr.reduce(
  (a, v) => {
    return a.concat(
      a.map((r) => {
        return [v].concat(r);
      })
    );
  },
  [[]]
);

// const newArray = arr.reduce(
//   (a, v) => a.concat(a.map((r) => [v].concat(r))),
//   [[]]
// );
console.log(newArray);

// // arr = [...new Set(arr)];

// let allArr = [[]];
// let tempArr = [];

// for (let i = 0; i < arr.length; i++) {
//   tempArr = [];
//   for (let j = i; j < arr.length; j++) {
//     tempArr.push(arr[j]);

//     //Using slice to make a copy so manipulating the array will not affect the data already added into allArr
//     allArr.push(tempArr.slice());
//   }
// }

// //Just sorting the array by their length
// allArr = allArr.sort((a, b) => a.length - b.length);

// console.log(allArr);
