function solution(arr, divisor) {

    let resultArr = []

    // 배열의 요소를 돌아가면서 divisor로 나눠주기
    arr.forEach(el => {
        // 떨어지는 요소가 있으면 해당 요소를 오름차순으로 정렬한 배열을 반환
        if(el % divisor === 0) {
            resultArr.push(el)
        }
    })
    resultArr.sort((a, b) => a - b)

    // 떨어지는 요소가 하나도 없다면 배열에 -1 담아 반환
    if(resultArr.length === 0) {
        resultArr.push(-1)
    }
    return resultArr
}