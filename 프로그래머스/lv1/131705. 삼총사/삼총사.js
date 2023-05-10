function solution(number) {

  let result = 0;
  
  for(let i = 0; i < number.length; i++) {

    for(let j = i+1; j < number.length; j++) {

      let plusTwoNum = number[i] + number[j]

      for (let k = j+1; k < number.length; k++) {

        if(plusTwoNum + number[k] === 0) {
          result = result + 1
        }
        continue
      }
    }
  }
  return result
}