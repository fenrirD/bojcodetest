/**
 * @Date : 2021-08-30
 * @User : forcewave
 *
 * @problemNumber: 17413
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
const solution = (input: string) => input.split(/(<[^>]+>)/g).map((s)=> s[0]==='<' ? s : s.split(' ').map((ss)=>ss.split('').reverse().join('')).join(' ')).join('').trim()

    // console.log(ab.filter(s=>s).join('').trim())


console.log(solution('one1 two2 three3 4fourr 5five 6six'))
solution('<ab cd>ef gh<ij kl>')
solution('<int><max>2147483647<long long><max>9223372036854775807')



