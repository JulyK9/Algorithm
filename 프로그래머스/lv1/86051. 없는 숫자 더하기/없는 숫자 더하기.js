function solution(numbers) {
    // 반복문으로 돌면서 numbers에 없는 수를 체크하고 더해주기
    let result = 0
    for(let i = 0; i < 10; i++) {
        if(numbers.indexOf(i) === -1) {
            result += i
        }
    }
    return result
}

// find(), findindex(), indexOf() 의 차이를 알고 빠르게 적용