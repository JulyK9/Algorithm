function solution(sizes) {
    // 배열 안의 크기를 모두 담을 수 있는 크기 찾기
    // 가로 세로 길이를 바꿔서 만족해도 됨 => 더 큰 값을 w로 설정하고 케이스 전부 검색
  
    let rotated = []
  
    for(let i = 0; i < sizes.length; i++) {
        // console.log(sizes[i])
        sizes[i][0] > sizes[i][1] ? rotated.push(sizes[i]) : rotated.push(sizes[i].reverse())
    }
  
    // console.log(rotated) // rotated 한 배열 확인
    
    let MaxWidth = []
    let MaxHeight = []
    
    for(let i = 0; i < rotated.length; i++) {
        MaxWidth.push(rotated[i][0])
        MaxHeight.push(rotated[i][1])
    }
    // console.log(Math.max(...MaxWidth))
    // console.log(Math.min(...MaxHeight))
    return Math.max(...MaxWidth) * Math.max(...MaxHeight)
}