/**
 * @Date : 2022-05-24
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/12953
 * @input
 * [[60, 50], [30, 70], [60, 30], [80, 40]]
 * @output
 * LCM = num1 * num2 /  gcd ( num1 , num2 )
 * gcd = a % b ? gcd(b, a% b) : b
 **/

const solution = (arr) => {
  let quotient = 2
  const quotients = []
  while (!arr.every(a => a === 1)) {
    const temps = []
    for (const arrKey in arr) {
      // console.log(arr[arrKey], cnt, "&&")
      if(!(arr[arrKey] % quotient)){
        arr[arrKey] /= quotient
        temps.push(quotient)
      }
    }
    if(!temps.length) {
      // console.log('in?')
      ++quotient
    } else{
      quotients.push(quotient)
      quotient = 2
    }
  }

  return quotients.reduce((a,b)=>a*b)
}

const solution2 = (arr) => {

  const gcd = (a, b) => {
    // 14 , 6
    // a % b =  2
    // 6 2
    console.log(a)
    return a % b ? gcd(b, a % b) : b
  }
  // console.log(gcd(17,6))
  const a = arr.reduce((a,b)=>a*b/ gcd(a,b))
  // console.log(a)


}
console.log(solution2([14, 6, 8, 2,]))



// 1 * 3 * 4 * 7
// 2 * [2*3], [2*2*2], [2*7]
// 2 | 3, 2*2 , 7 
// console.log(solution([2, 6, 8, 14,])) // 168
// console.log(solution(5)) // 5
// console.log(solution([1, 2, 3])) // 6
// console.log(solution([2, 6, 9])) // 6
// 2 6 8 = > 1 3 4 => 12
// 2 6 9 =>  => 18 => 108 / 3 = > 36 / 3 * 2
// 2*1 3*2 3*3
// 2^2 * 3^3
//  3|    2 6 9
//  2|    2 2 3
//        1 1 3
//
//  2| 2 6 9
//  3| 1 3 9
//  3| 1 1 3
//   | 1 1 1
// 5 10 15




