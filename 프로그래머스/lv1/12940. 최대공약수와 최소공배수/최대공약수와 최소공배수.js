function solution(n, m) {
    function gcd(n, m) {
    while(n !== 0) {
      let r = m % n
      m = n
      n = r
    }
    return m
  }
  
  // LCM 산출 공식
  function lcm(n, m) {
    return m * (n / gcd(n, m))
  }
  
  // 인자로 들어오는 값이 어떤 게 큰 지 알 수 없으므로 경우에 따른 로직 적용
  if(n < m) {
    return [gcd(n, m), lcm(n, m)]
  } else {
    return [gcd(m, n), lcm(m, n)]
  }
}