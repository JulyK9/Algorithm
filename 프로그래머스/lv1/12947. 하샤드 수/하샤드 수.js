function solution(x) {

    let num = 0
    
    // 인자를 연산가능한 한자리씩으로 분리
    let splitNumArr = String(x).split('')
    
    // 나눈 한자리를 모두 더하기
    for (let i = 0; i < splitNumArr.length; i++) {
        num = num + Number(splitNumArr[i])
    }
    
    // 더한 수로 인자를 나눠서 하샤드수인지 판단
    if(x % num === 0) {
        return true
    } else return false
}