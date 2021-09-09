/**
 * @Date : 2021-09-08
 * @User : forcewave
 * 
 * @problemNumber: 10808, 10809
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

const solution = (input) => {
    const obj= new Array(26).fill(0).reduce((acc,cur,idx)=> ({...acc,[String.fromCharCode(97+idx)]:0}) ,{})
    input.split('').forEach((c)=>obj[c]=obj[c]+1)
    console.log(Object.values(obj).join(' '))
}

const solution2 = (input) => {
    const obj= new Array(26).fill(-1).reduce((acc,cur,idx)=> ({...acc,[String.fromCharCode(97+idx)]:-1}) ,{})
    input.split('').forEach((c,idx)=>obj[c]=obj[c]>-1? obj[c] : idx)
    console.log(Object.values(obj).join(' '))
}

solution(`baekjoon`.toString().trim())
solution2(`baekjoon`.toString().trim())