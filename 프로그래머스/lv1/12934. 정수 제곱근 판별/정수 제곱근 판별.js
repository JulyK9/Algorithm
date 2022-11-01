function solution(n) {
    
    let sqrted = Math.sqrt(n)
    let x = Math.floor(sqrted)

    if (n === x*x) {
        return (x+1)*(x+1)
    } else {
        return -1
    }
}