/* Write a program that will return true if the string is y/yes or false if the string is
n/no. ( regex ) */

function yesNo(input) {
  const patternNo = /\bno\b | \bn\b/i;
  const patternYes = /\byes\b | \by\b/i;
  if (input.search(patternNo)) return false;
  else if (input.search(patternYes)) return true;
  else return "Input neither contains yes/y or no/n";
}

const input = "no one is working here";

// if (input == "yes" || input == "y") console.log(true);
// else if (input == "no" || input == "n") console.log(true);
// else console.log("Unidentified input");

console.log(yesNo(input));
