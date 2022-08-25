const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el))


let A = input[0]
let B = input[1]
let C = input[2]

// 확인
// console.log(numA)
// console.log(numB)
// console.log(numC)

let line1st = (A + B) % C;
let line2nd = ((A % C) + (B % C)) % C;
let line3rd = (A * B) % C;
let line4th = ((A % C) * (B % C)) % C;

console.log(line1st)
console.log(line2nd)
console.log(line3rd)
console.log(line4th)
