function solution(phone_number) {
    // 보존할 마지막 4자리 숫자
    let last4Digit = phone_number.slice(-4)
    // 바꿔줘야할 문자의 길이
    let replaceLength = phone_number.length - 4
    // 새로운 조합으로 문자 생성
    return "*".repeat(replaceLength) + last4Digit
}