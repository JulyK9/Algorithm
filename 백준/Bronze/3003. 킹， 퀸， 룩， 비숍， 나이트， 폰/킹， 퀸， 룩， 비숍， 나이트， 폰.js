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

// 정리
let king = Number(input[0]);
let queen = Number(input[1]);
let look = Number(input[2]);
let bishop = Number(input[3]);
let knight = Number(input[4]);
let phone = Number(input[5]);

(king === 1) ? king = 0 : king = 1 - king;
(queen === 1) ? queen = 0 : queen = 1 - queen;
(look === 2) ? look = 0 : look = 2 - look;
(bishop === 2) ? bishop = 0 : bishop = 2 - bishop;
(knight === 2) ? knight = 0 : knight = 2 - knight;
(phone === 8) ? phone = 0 : phone = 8 - phone;

console.log(`${king} ${queen} ${look} ${bishop} ${knight} ${phone}`);