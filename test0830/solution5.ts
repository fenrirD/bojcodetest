/**
 * @Date : 2021-09-02
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

export
const solution = (input: string[]) => {
    const [cnt, line] = input
    const arr = line.split(' ')
    const stack = []
    const r = new Array(arr.length).fill(-1)
    for (let i = 0; i < arr.length ; i++) {
        while (stack.length && arr[stack[stack.length-1]] < arr[i]){
            r[stack.pop()] = arr[i]
        }
        stack.push(i)
    }

    console.log(r.join(' '))
}

solution(
    `2
2 1
`.toString().trim().split('\n')
)

// 7 2 5 3
// -1 7 7 5

solution(
    `4
3 7 5 6
`.toString().trim().split('\n')

)