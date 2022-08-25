// const fs = require("fs");

// const input = fs
//   .readFileSync(
//     process.platform === "linux"
//       ? "/dev/stdin"
//       : __filename.split("/").pop().slice(0, -3) + ".txt"
//   )
//   .toString()
//   .trim()
//   .split(" ");

// 정리(제출)
// let king = Number(input[0]);
// let queen = Number(input[1]);
// let look = Number(input[2]);
// let bishop = Number(input[3]);
// let knight = Number(input[4]);
// let phone = Number(input[5]);

// (king === 1) ? king = 0 : king = 1 - king;
// (queen === 1) ? queen = 0 : queen = 1 - queen;
// (look === 2) ? look = 0 : look = 2 - look;
// (bishop === 2) ? bishop = 0 : bishop = 2 - bishop;
// (knight === 2) ? knight = 0 : knight = 2 - knight;
// (phone === 8) ? phone = 0 : phone = 8 - phone;

// console.log(`${king} ${queen} ${look} ${bishop} ${knight} ${phone}`);


// let king = Number(input[0])
// if (king === 1) {
//   king = 0
// } else {
//   king = 1 - king;
// }

// 삽질..
// if (king < 1) {
//   king = 1 + king
// } else if (king > 1) {
//   king = 1 - king 
// } else {
//   king = 0
// }
// 0 (1보다 작을 때) +1  = 1 + king
// 2 (1보다 클때) -1  = 1 - king

// let queen = Number(input[1])
// if (queen === 1) {
//   queen = 0
// } else {
//   queen = 1 - queen
// }

// if (queen < 1) {
//   queen = 1 + queen;
// } else if (queen > 1) {
//   queen = 1 - queen;
// } else {
//   queen = 0;
// }

// let look = Number(input[2])
// if (look === 2) {
//   look = 0;
// } else {
//   look = 2 - look;
// }

// let bishop = Number(input[3])
// if (bishop === 2) {
//   bishop = 0;
// } else {
//   bishop = 2 - bishop;
// }

// let knight = Number(input[4])
// if (knight === 2) {
//   knight = 0;
// } else {
//   knight = 2 - knight;
// }

// let phone = Number(input[5])
// if (phone === 2) {
//   phone = 0;
// } else {
//   phone = 8 - phone;
// }
  

  // console.log(`${king} ${queen} ${look} ${bishop} ${knight} ${phone}`);

// 총 16개 => 킹1 / 퀸1 /룩2 / 비숍2 / 나이트2 / 폰8
// 입력 : 발견한 개수
// 출력 : 더하거나 빼야되는 피스의 수
// 기본로직 : 가지고 있어야 될 수에서 가지고 있는 걸 빼면 됨 ( 이 원리가 쉽게 이해가 잘 안되고 머리에 잘 안그려졌음.. )


// 다른 사람 풀이 굿!!!
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
  .map((el) => Number(el)); // 배열안의 요소를 숫자로 만들어놓기

let origin = [1, 1, 2, 2, 2, 8] // 원래 되어야 하는 수치를 배열화
let result = origin.map((el, idx) => el - input[idx]) // 갖춰야될 수의 배열과 가지고 있는 수의 배열을 map 을 돌리면서 계산해 줌(리턴은 배열)

console.log(result.join(' ')) // join 메서드와 구분자를 통해서 배열 => 문자열