function solution(s) {
    
    const ctrIdx = Math.floor(s.length / 2)
    
    // 단어길이 홀수
    if(s.length % 2 === 1) {
      return s[ctrIdx]
    } 
  
    // 단어길이 짝수
    else {
      return s[ctrIdx-1] + s[ctrIdx]
    }  
}