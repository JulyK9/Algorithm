const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux"
    ? "/dev/stdin"
    : __filename.split("/").pop().slice(0, -3) + ".txt").toString().trim().split(" ")

console.log(input)
// console.log(input[0] + "??!"); 이것도 가능
console.log(`${input[0]}??!`);

// trim() 은 안주니까 계속 틀리다고 나왔음 => 음 찍어보면 큰 차이가 없는거 같은데