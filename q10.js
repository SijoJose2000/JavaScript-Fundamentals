// Write a program to convert time 24 hours to 12 hours.

function getTwelveHourFormat(time) {
  if (0 > time || time > 23) {
    return "Not a valid hour.";
  }

  if (time === 0) {
    return "12am";
  } else if (time === 12) {
    return time + "pm";
  } else if (time > 12) {
    return time - 12 + "pm";
  } else return time + "am";
}

let time = 13;

console.log(getTwelveHourFormat(time));
