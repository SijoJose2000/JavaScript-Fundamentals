// Write a program to convert time 24 hours to 12 hours.

function getTwelveHourFormat(time) {
  if (time > 23) {
    return "Not a valid hour";
  }

  if (time === 0) {
    return "12am";
  } else if (time === 12) {
    return time + "pm";
  } else if (time > 12) {
    return time - 12 + "pm";
  } else return time + "am";
}

let time = 23;

console.log(getTwelveHourFormat(time));
