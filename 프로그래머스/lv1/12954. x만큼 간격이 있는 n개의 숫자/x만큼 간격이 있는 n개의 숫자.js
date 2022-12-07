function solution(x, n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        result.push(i*x)
    }
    return result;
}

// x = -4, n = 2 / to = -8
// x = 2 + 2 = 4

// function solution(x, n) {
//     let result = []
//     let initial = x
//     let to = n * x
//     for (let i = x; x <= to; x = x + initial) {
//         result.push(x)
//         // x = x + x
//     }
//     return result;
// }