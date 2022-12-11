function solution(n) {
    // n이 7보다 작으면 무조건 1판만 있으면 됨
    if (n <= 7) return 1;
    
    // n이 7보다 클 때
    if (n > 7) {
      return Math.ceil(n / 7);
    }
}