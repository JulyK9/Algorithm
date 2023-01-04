function solution(left, right) {
    
  let result = 0;

  // left부터 right 까지 숫자를 탐색
  for (let i = left; i <= right; i++) {
      
    // 짝홀 카운팅할 변수 선언
    let count = 0;

    // 약수 체크(나누어 떨어지는 수)
    for (let k = 1; k <= i; k++) {
        
      // 약수가 구힐 때마다 카운팅
      if (i % k === 0) {
        count++;
      }
    }
    // 반복후 약수 개수(count) 체크
    // console.log("count: ", count)
      
    // 짝홀 여부에 따라 결과값에 해당수를 연산 처리
    count % 2 === 0 ? (result += i) : (result -= i);
  }
  return result;
}