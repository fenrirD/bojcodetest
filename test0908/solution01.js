/**
 * @Date : 2021-09-08
 * @User : forcewave
 *
 * @problem Number:17299
 * @problem
 * 크기가 N인 수열 A = A1, A2, ..., AN이 있다. 수열의 각 원소 Ai에 대해서 오등큰수 NGF(i)를 구하려고 한다.
 * Ai가 수열 A에서 등장한 횟수를 F(Ai)라고 했을 때, Ai의 오등큰수는 오른쪽에 있으면서 수열 A에서 등장한 횟수가 F(Ai)보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다.
 * 그러한 수가 없는 경우에 오등큰수는 -1이다.
 * 예를 들어, A = [1, 1, 2, 3, 4, 2, 1]인 경우 F(1) = 3, F(2) = 2, F(3) = 1, F(4) = 1이다.
 * A1의 오른쪽에 있으면서 등장한 횟수가 3보다 큰 수는 없기 때문에, NGF(1) = -1이다.
 * A3의 경우에는 A7이 오른쪽에 있으면서 F(A3=2) < F(A7=1) 이기 때문에, NGF(3) = 1이다. NGF(4) = 2, NGF(5) = 2, NGF(6) = 1 이다.
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

const solution = (input) => {
    // 1. 먼저 횟수 체크를 먼저하자...


    let f = {};
    input.forEach((x) => {
        f[x] = (f[x] || 0) + 1;
    });
    //
    const stack = []
    const result = new Array(input.length).fill(-1)
    for (let i = 0; i < input.length; i++) {
        while (stack.length && f[input[stack[stack.length - 1]]] < f[input[i]]) {
            result[stack.pop()] = input[i];
        }
        stack.push(i);
    }
    console.log(result.join(' '))
    // input.map()
    // const a = arr.split(' ').map(n=> ({[n]:f[n]}))
    // const b = a.map((obj,idx)=>a.find((obj2,idx2)=> idx < idx2 && Object.values(obj2)[0] > Object.values(obj)[0] )).map(n=> n?Object.keys(n)[0] :-1)
    // console.log(b.join(' '))
}

solution(
    `7
1 1 2 3 4 2 1`.toString().trim().split('\n')[1].split(' ')
)