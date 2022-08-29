const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split(" ");

let grade = Number(input[0]);

// if (grade <= 100 && grade >= 90) {
//   return console.log('A')
// }
// else if (grade <= 89 && grade >= 80) {
//   return console.log('B')
// }
// else if (grade <= 79 && grade >= 70) {
//   return console.log('C')
// }
// else if (grade <= 69 && grade >= 60) {
//   return console.log('D')
// }
// else {
//   return console.log('F')
// }

// 다른 사람들의 좀 더 간결한 방법

if (grade >= 90) {
  return console.log("A");
} else if (grade >= 80) {
  return console.log("B");
} else if (grade >= 70) {
  return console.log("C");
} else if (grade >= 60) {
  return console.log("D");
} else {
  return console.log("F");
}