/**
 * @Date : 2021-09-09
 * @User : forcewave
 *
 * @problem Number:
 * @problem
 *
 * @input
 *
 * @output
 *
 *
 * sing line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
**/

const solution = (input) => input.replace(/[A-Za-z]/g,(str,p1,offset)=>{
    let code = str.charCodeAt()
    let minCode = code > 90 ? 97 : 65
    return String.fromCharCode(((str.charCodeAt() + 13 ) - minCode ) % 26 + minCode)
})

const solution2 = (input) => parseInt(input[0] + input[1]) + parseInt(input[2] + input[3])

const s = (c) => c.split('').map((_,i)=>c.substr(i)).sort().join('\n')


console.log(solution(`Baekjoon Online Judge1`))
console.log(solution(`One is 1`))
console.log(solution2(`10 20 30 40`.toString().trim().split((' '))))
console.log(s(`baekjoon`.toString().trim()))