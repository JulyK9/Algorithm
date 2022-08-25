const fs = require('fs');

const input = fs.readFileSync(process.platform === "linux"
  ? "/dev/stdin"
  : __filename.split("/").pop().slice(0, -3) + ".txt").toString().trim().split(" ")

let num1 = Number(input[0])
let num2 = Number(input[1])

console.log(String(num1 + num2))


// console.log(__filename); // /Users/jkkim/Documents/Hello-JK-World/baekjoon/입출력과사칙연산/1000.js
// console.log(__filename.split("/"));
// console.log(__filename.split("/").pop()); // 1000.js
// console.log(__filename.split("/").pop().slice(0, -3)); // 1000
// console.log(__filename.split("/").pop().slice(0, -3) + ".txt"); // 1000.txt

console.log(input);
// console.log(typeof input); // object
// console.log(Array.isArray(input)); // true

// =======================
// vscode 테스트용
// readFileSync 로 txt 파일을 읽어와서 toString()과 split()을 이용해서 배열로 만들어 input에 저장한 것
// const input = require("fs").readFileSync("1000.txt").toString().split(" ");
// const input = fs.readFileSync("1000.txt").toString().split(" ");

// =======================
// 백준 제출용 : 백준에서는 /dev/stdin 경로를 이용
// const input = fs.readFileSync('/dev/stdin').toString().split('').map(Number);
// =======================
// 종합용 : 삼항연산자를 이용하여 vscode 연습 케이스와 백준 제출 케이스를 종합적으로 다 반영 가능
// const input = require("fs").readFileSync(process.platform === "linux")
//   ? "/dev/stdin"
//   : __filename.split("/").pop().slice(0, -3) + ".txt";

// (참고) __filename : 현재 실행 중인 코드의 경로와 파일 이름
// (참고) process.platform : 플랫폼
// =======================

// =======================
// < 한 줄 입력 >
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// let num = Number(input);

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }
// =======================
// < 여러 줄 입력 >
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let count = input[0];
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== '') {
//     numbers.push(input[i].split(' '));
//   }
// }
// =======================

// for (let i = 0; i < numbers.length; i++){
//   let num1 = Number(numbers[i][0]);
//   let num2 = Number(numbers[i][1]);

//   console.log(num1 + num2);
// }



// // 1. 하나의 값을 입력받을 때
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// // 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// // 3. 여러 줄의 값들을 입력받을 때
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// // 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

// // 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
// const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// // 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// // ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
// const n = input[0];
// const n_arr = input.slice(1, n+1);
// const [m, ...m_arr] = input.slice(n+1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가

// 참고 : https://tesseractjh.tistory.com/39
// 참고 : https://nyang-in.tistory.com/156