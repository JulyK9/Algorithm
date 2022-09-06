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
  .map((el) => Number(el));

let H = input[0];
let M = input[1];

if (M < 45) {
  if (H === 0) {
    H = 24 - 1;
  } else {
    H = H - 1;
  }
  M = 60 - (45 - M);
} else {
  M = M - 45;
}

return console.log(`${H} ${M}`)