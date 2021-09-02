/**
 * @Date : 2021-09-01
 * @User : forcewave
 *
 * @problemNumber: 10799
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

// ()  l = 0
// (((  l = 3
// ((( l = 3
// ) = 1
// ( = 3
// ) = 1
// 2
// 1
// 1
// 1
// 1
export
const solution = (input:string) => {
    const stack = []
    const result = input.split('').reduce((acc,s,idx)=> {
        if(s==='(') stack.push(s)
        else if(s===')') {
            stack.pop()
            if(input[idx-1]==='(') {
                acc+=stack.length
            }
            else acc +=1
        }
        return acc
    },0)
    console.log(result)
}

solution(`()(((()())(())()))(())`)

solution(`(((()(()()))(())()))(()())`)

// 3 4 4 1 1 5 1 4 1 1 5 5 1
