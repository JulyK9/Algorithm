function solution(s) {
  if (s.length === 4 || s.length === 6) {
    let criterion = []
    let arr = s.split("")
    arr.map(el => {
      // if(!!Number(el)) {
        if(!isNaN(el)) {
            criterion.push(el)
      }
    })  
  let str = criterion.join("")
  return str === s
  } else {
    return false
  }
}