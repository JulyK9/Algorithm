function solution(arr) {
    if(arr.length === 1) return [-1];
    let min = arr[0]
    for(let i = 1; i < arr.length; i++) {
      min > arr[i] ? min = arr[i] : null
    }
    return arr.filter(el => el !== min)
}