function solution(d, budget) {
  // arr.sort() 는 원본배열을 변경
  d = d.sort((a,b) => a-b);

  let sum = 0;
  
  for(let i = 0; sum <= budget; i++) {
    if(sum + d[i] <= budget) {
      sum += d[i]
      continue
    }
    return i;
  }
}