/**
 * @Date : 2021-09-08
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
 ABC*+DE/-
**/

const solution = (arr) => {
    const stack = []
    const op = []
    const weightValue = {
        '+':1,
        '-':1,
        '*':2,
        '/':2,
    }
    for (let i = 0; i < arr.length; i++) {
        if(/\w/.test(arr[i])){
            stack.push(arr[i])
        } else {
            let opp = arr[i]
            if(opp===')') {
                while (op[op.length-1]!=='('){
                    stack.push(op.pop())
                }
                op.pop()
            } else if (opp===')') {
                op.push(opp)
            } else {
                while (op.length && weightValue[opp] <= weightValue[op[op.length-1]] ){
                    stack.push(op.pop())
                }
                op.push(opp)
            }
        }
    }
    console.log(op)
    console.log(stack.concat(op.reverse()).join('').trim())

}
// A*B*C
// ab*c*
solution(`A+(B*C)-D/E`.toString().trim().split(''))
solution(`A*(B+C)`.toString().trim().split(''))
solution(`A+(B*C)*D*E+F`.toString().trim().split(''))
solution(`(A+B)*C-D`.toString().trim().split(''))
solution(`A+B*C+D*E+G`.toString().trim().split(''))
solution(`A*B+C+D+E*F*G+E`.toString().trim().split(''))
// a+((B*C)*((D-E)*G))
// abc*de-G**_
solution(` A*B/C*D/E`.toString().trim().split(''))
solution(`A+B*C*((D-E)*G)`.toString().trim().split(''))
solution(`A+B-C`.toString().trim().split(''))
solution(`A*B+C`.toString().trim().split(''))
