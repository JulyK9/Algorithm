function solution(num) {
    
    let count = 0
    if (num === 1) return 0
  
    while (num !== 1) {
        if (count === 500) return -1
      // 짝수일 경우
      if(num % 2 === 0) {
          num = num / 2
          count++
      } else

      // 홀수일 경우
      if(num % 2 === 1)  {
          num = num * 3 + 1
          count++
      } 
      
      if (num === 1) {
        return count;
        break;
      }
    }
}