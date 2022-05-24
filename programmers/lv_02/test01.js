/**
 * @Date : 2022-05-18
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript
 * @input
 * [[60, 50], [30, 70], [60, 30], [80, 40]]
 * @output
**/

// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine

const solution = (n) => {
  let arr = [0,1]

  for (let i = 2; i <= n+1; i++) {
    arr[i] = (arr[i-1]  + arr[i-2] )  % 1234567
  }

  return arr[n]
}

console.log(solution(3)) // 2
// console.log(solution(5)) // 5
console.log(solution(100)) // 5

