function solution(n) {
    // n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴
    
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}