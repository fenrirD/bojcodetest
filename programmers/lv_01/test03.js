/**
 * @Date : 2022-04-28
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/86491
 * @input
 * [[60, 50], [30, 70], [60, 30], [80, 40]]
 * @output
**/

const solution = (numbers) => numbers.map(number=> number.sort((a, b)=>a-b)).reduce((acc, cur)=>[Math.max(acc[0],cur[0]), Math.max(acc[1],cur[1])] , [0,0]).reduce((acc,cur)=>acc*cur)


console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))

// solution(``.toString().trim())