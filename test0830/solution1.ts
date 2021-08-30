/**
 * @Date : 2021-08-30
 * @User : forcewave
 * 
 * @problem Number: 
 * @problem
 * 요세푸스 문제는 다음과 같다.
 * 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다.
 * 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
 * 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
 * N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.
 * @input
 * 첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 5,000)
 * 7 3
 * @output
 * <3, 6, 2, 7, 5, 1, 4>
 * 
 * sing line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
**/
// 1 2 3 4 5 6 7 --- idx => 2
// 1 2 4 5 6 7 --- idx => 5
// 1 2 4 5 7   --- idx => 2
// 1 4 5 7 ---
// 1 4 5  --- 5 k = 2
// 1 4    ---  k = 2
export const solution = (N:number,K:number) => {
    const array = new Array(N).fill(0).map((n,idx)=> idx+1)
    const result = []
    while (array.length){
        for (let i = 0; i < K ; i++) {
            array.push(array.shift())
        }
        result.push(array.pop())
    }

    console.log('<'+result.join(', ')+'>')

}

let input = `7 3`.split(' ').map((i)=>parseInt(i))
solution(input[0],input[1])

input = `7 1`.split(' ').map((i)=>parseInt(i))
solution(input[0],input[1])

input = `3 2`.split(' ').map((i)=>parseInt(i))
solution(input[0],input[1])

input = `1 1`.split(' ').map((i)=>parseInt(i))
solution(input[0],input[1])
// 1 2 3 4 -- 3 2
// 1 4
input = `4 3`.split(' ').map((i)=>parseInt(i))
solution(input[0],input[1])
// 1 2 3 4 5 6 7 8 9 10  -- 6
// 1 2 3 4 5 7 8 9 10  -- 2
// 1 3 4 5 7 8 9 10  -- 9
// 1 3 4 5 7 8 10  -- 7
// 1 3 4 8 10  -- 5
// 1 3 4 10  -- 8
// 1 3 4 8 10
//

input = `10 6`.split(' ').map((i)=>parseInt(i))
solution(input[0],input[1])


const main = (line) => {
    const [N, K] = line.split(" ").map(Number);
    const arr = new Array(N).fill(0).map((el, i) => i + 1);
    let answer = "<";

    while (arr.length) {
        for (let i = 0; i < K; i++) {
            arr.push(arr.shift());
        }

        if (arr.length === 1) {
            answer += `${arr.pop()}>`;
        } else {
            answer += `${arr.pop()}, `;
        }
    }
    console.log(answer);
};
main(`10 6`)
main(`7 3`)