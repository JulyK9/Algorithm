const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n") // 여러 줄의 값들을 입력받을 경우 줄을 구분자로 하는 표현식 \n

// console.log(input[0])
// console.log(input[1])

const num1 = Number(input[0]);
const num2 = Number(input[1]);

let result3 = num1 * input[1][2]
let result4 = num1 * input[1][1]
let result5 = num1 * input[1][0]
let result6 = num1 * num2

console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)