function solution(absolutes, signs) {
    let combined = []
  
    for(let i = 0; i < absolutes.length; i++) {
      signs[i] ? combined[i] = absolutes[i] : combined[i] = -absolutes[i]
    }
    return combined.reduce((acc, cur) => acc + cur)
}