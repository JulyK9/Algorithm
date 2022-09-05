const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? 0
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n")

let x = Number(input[0])
let y = Number(input[1])

if (x > 0 && y > 0) {
  return console.log(1);
}
else if (x < 0 && y > 0) {
  return console.log(2);
}
else if (x < 0 && y < 0) {
  return console.log(3);
}
else {
  return console.log(4);
}