/**
 * @Date : 2022-04-28
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 * @input
 * [[60, 50], [30, 70], [60, 30], [80, 40]]
 * @output
**/
const result = {
  6:1,
  5:2,
  4:3,
  3:4,
  2:5,
  1:6,
  0:6,
}

const solution = (lottos, win_nums) => {
  // 로또 맞추기 문제..
  // 1. 맞은 번호 갯수 찾기, 0 값 찾기..
  const findNum = lottos.filter(num => win_nums.includes(num)).length
  const zero = lottos.filter(num => !num).length
  return [result[findNum+zero], result[findNum]]
}


console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))

// solution(``.toString().trim())