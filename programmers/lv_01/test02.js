/**
 * @Date : 2022-04-27
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는
 * 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 * 1 ≤ numbers의 길이 ≤ 9
 0 ≤ numbers의 모든 원소 ≤ 9
 numbers의 모든 원소는 서로 다릅니다.
 * @input
 * [1,2,3,4,6,7,8,0]
 * [5,8,4,0,6,7,9]
 * @output
 * 14
 * 6
 * sing line input
 require('fs').readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
**/

const solution = (numbers) => 45 - numbers.reduce((acc, cur) => acc+=cur,0)

console.log(solution([1,2,3,4,6,7,8,0]))

// solution(``.toString().trim())