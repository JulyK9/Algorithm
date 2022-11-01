function solution(n) {
    let str = String(n)
    let arr = []
    
    for(let i = 0; i < str.length; i++) {
        arr.push(Number(str[str.length - i - 1]))    
    }
    return arr
}