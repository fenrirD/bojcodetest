/**
 * @Date : 2022-05-30
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
 * @input
 *
 * @output
 * baabaa  1
 * cdcd  0
 A	        B	          answer
 [1, 4, 2]	[5, 4, 4]	  29
 [1,2]	    [3,4]	      10
 **/
const solution = (A,B) => {
  const b = B.sort((a,b)=>b-a)
  console.log(A.sort(),b)
  return A.sort().reduce((acc, cur, idx)=> acc+ cur*b[idx],0)
}

console.log(solution([1, 4, 2], [5, 4, 4]))
console.log(solution([1, 2], [3, 4]))
console.log(solution([1, 1, 1], [1, 1,1]))
console.log(solution([3, 6, 9], [0, 0,0]))
console.log(solution([3, 3, 3], [3, 3,5]))
console.log(solution([3, 0, 1], [0, 2,1]))
// console.log(solution("cdcd"))