/* Write a program that will return true if the string is y/yes or false if the string is
n/no. ( regex ) */

function yesNo(input) {
  const patternNo = /\bno*\b/i;
  const patternYes = /\by(es)*\b/i;
  if (input.match(patternYes) && input.match(patternNo))
    return "Both yes/y and no/n exist";
  else if (input.match(patternNo)) return false;
  else if (input.match(patternYes)) return true;
  else return "Input neither contains yes/y or no/n";
}

const input = "no one is there";
console.log(yesNo(input));

// if (input == "yes" || input == "y") console.log(true);
// else if (input == "no" || input == "n") console.log(true);
// else console.log("Unidentified input");
