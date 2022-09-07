const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n")

let h = Number(input[0].split(" ")[0])
let m = Number(input[0].split(" ")[1])
let t = Number((input[1]))

// 현재시간(분) + 요리에 필요한 시간(분)
let mm = m + t; 
// 현재시간(시) + 요리에 필요한 시간(시)
let hh = h + Math.floor(mm / 60);

if (mm < 60) mm;
if (mm >= 60) mm = mm % 60;

if (hh === 24) hh = 0;
if (hh < 24) hh;
if (hh > 24) hh = hh - 24;

console.log(hh, mm);