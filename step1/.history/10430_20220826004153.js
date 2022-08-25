const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split(" ");


let numA = input[0]
let numB = input[1]
let numC = input[2]

console.log(numA)
console.log(numB)
console.log(numC)
