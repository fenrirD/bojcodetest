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

const solution = (s) => {
  const obj = {
    'zero': '0',
    'one':1,
    'two':2,
    'three':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9,
  };

  return Number.isInteger(s) ? parseInt(s): parseInt([...s].reduce((acc, cur)=>{
    Number.isInteger(parseInt(cur))  ? acc.push(cur) : Number.isInteger(parseInt(acc[acc.length-1])) ? acc.push(cur) : acc.push((acc.pop() ||"") +cur)
    if(obj[acc[acc.length-1]]) {
      acc[acc.length-1] = obj[acc[acc.length-1]]
    }
    return acc
  },[]).join(''))
}

console.log(solution("one4seveneight")) // 1478
console.log(solution("23four5six7")) // 234567
console.log(solution("ninenineninenineninenine")) // 234567
console.log(solution("999999999")) // 234567
console.log(solution("ninezero00001")) // 234567
console.log(solution("onezero")) // 234567
console.log(solution("onenine")) // 234567
console.log(solution("onezerozerozerozerozerozero")) // 234567

// 2 1 1 0
// console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"]	, 3))
