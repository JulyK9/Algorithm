function solution(a, b) {
    // let arr = [a, b]
    // arr.sort((a, b) => a - b);
    let sum = 0
    
    if (a === b) return a;
    
    // if (a - b > 0) {
    //     for (let i = b; i < a; i++) {
    //         sum = sum + i
    //     }
    //         return sum
    // }
    if (a - b > 0) {
            for (let i = b; i <= a; i++) {
            sum = sum + i
        } return sum    
    } else {
        for (let i = a; i <= b; i++) {
            sum = sum + i
        } return sum    
    }
}