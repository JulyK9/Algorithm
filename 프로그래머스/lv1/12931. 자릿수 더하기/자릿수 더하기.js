function solution(n) {
    let result = 0
    let number = String(n);
    for (let i = 0; i < number.length; i++) {
        result = result + Number(number[i])
    }
    return result;
}