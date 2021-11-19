/**
 * @Date : 2021-08-26
 * @User : forcewave
 *
 * @problem
 * 문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.
 * @input
 * 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다. 단어의 길이는 최대 20,
 * 문장의 길이는 최대 1000이다. 단어와 단어 사이에는 공백이 하나 있다.
 * @output
 * 각 테스트 케이스에 대해서, 입력으로 주어진 문장의 단어를 모두 뒤집어 출력한다.
 *
 * sing line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 개행문자로 입력을 구분한다.
 var inputs = require('fs').readFileSync('/dev/stdin').toString().split(/\n/g);
**/

export const solution = () => {
    const inputs:string[] =`2
I am happy today 
We want to win the first prize`.split('\n')
    console.log(inputs)
    const answer = inputs.map((line,idx)=>{
        return !idx ? '' : line.split(' ').map(str=>str.split('').reverse().join('')).join(' ')
    }).forEach((line, idx)=> !idx || console.log(line))
    // console.log(answer)
    // console.log(answer.join('\n'))
    // console.log(1)
}

solution()




