function solution(price, money, count) {
    let totalPrice = 0
    for(let i = 1; i <= count; i++) {
        totalPrice += price * i    
    }
    
    let myPocket = money - totalPrice
    
    // 금액이 모자라지 않을 때
    if(myPocket >= 0) {
        return 0
    } 
    // 금액이 모자랄 때
    else {
        return Math.abs(myPocket);
    }
    
}