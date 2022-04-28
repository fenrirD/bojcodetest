/**
 * @Date : 2022-04-27
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 *두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
 * 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요
 * 1 ≤ left ≤ right ≤ 1,000
 * @input
 * 13	17
 * 24	27
 * @output
 * 43
 * 52
 * sing line input
 require('fs').readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
**/

const getDivisorCnt = (number) => {
  let cnt = 0
  for (let i = 1; i <=number ; i++) {
    if(number % i === 0) cnt++
  }
  console.log(number, cnt)
  return cnt % 2 ? -number : number
}

const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i <= right ; i++) {
    answer+=getDivisorCnt(i)
  }

  return answer;
}

console.log(solution(13, 17))

// solution(``.toString().trim())