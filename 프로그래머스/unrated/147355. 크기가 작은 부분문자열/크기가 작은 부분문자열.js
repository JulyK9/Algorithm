function solution(t, p) {
  // 부분 문자열을 요소로 담을 배열
  let partNumArr = []
  // p의 길이
  let length = p.length
  // 반복하며 부분 문자열 추출
  for (let i = 0; i < t.length - length + 1; i ++) {
    partNumArr.push(t.slice(i, i + length))
  }
  console.log(partNumArr) // 확인
  
  // 조건을 만족하는 부분 문자열을 담을 배열
  let resultNum = []
  
  // 반복하며 조건 확인후 배열에 담기
  for (let j = 0; j < partNumArr.length; j++) {
    if(partNumArr[j] <= p) {
      resultNum.push(partNumArr[j])
    }
  }
  // 개수를 반환
  return resultNum.length
}