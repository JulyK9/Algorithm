const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(String(num1 - num2));
// 출력의 타입을 요구하지 않아서
// console.log(num1 - num2);
// String() 으로 변환해주지 않아도 통과가 됨