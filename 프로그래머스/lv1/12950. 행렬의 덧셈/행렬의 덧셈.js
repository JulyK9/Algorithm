function solution(arr1, arr2) {
    // 결과를 담을 배열 선언 할당
    let result = []
    // 내부 배열에 접근하기 위해 arr1 반복문으로 탐색하면서 접근
    for(let i = 0; i < arr1.length; i++) {
        // 내부에 들어갈 배열 선언 할당
        let row = []
        // 반복문으로 내부 배열에 덧셈 결과를 push
        for(let k = 0; k < arr1[i].length; k++) {
            row.push(arr1[i][k] + arr2[i][k])
        }
        // 반복문으로 만들어진 내부 배열을 결과 배열에 push
        result.push(row)
    }
    return result
}