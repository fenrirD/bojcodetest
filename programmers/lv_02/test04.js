/**
 * @Date : 2022-05-24
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/12951
 * JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
 * 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
 * @input
 * "3people unFollowed me"  "3people Unfollowed Me"
 * "for the last week"  "For The Last Week"
 * @output


 **/



const solution = (s) => {
  const regex = /^[A-Z]/
  const regex2 = /^[^a-z]/
  const regex3 = /^[a-z]/
  const regex4 = /^[\w]/
  s = s.split(' ')
  // console.log(s)
  return s.reduce((acc,cur,idx)=>{
    cur = regex.test(cur) || regex2.test(cur) ? cur[0] + cur.replace(regex4,'').toLowerCase() : cur.length ? (cur[0].toUpperCase() + cur.replace(regex3,'').toLowerCase()) : ''
    cur = idx === s.length - 1 ? cur : cur + ' '
    return acc + cur
  },'')
}

console.log(solution("3people unFollowed me"))
console.log(solution("3"))
console.log(solution("ab Ab BBaa11 1CS C3ss4565DD B33333 aoKKKKKK332K k"))
console.log(solution("a       a         a"))
// //
// console.log(solution("For the last week"))
// console.log(solution("For the  last week"))
console.log(solution("a a a a a a a a a a "))
console.log(solution("A   bcd  hello"))
// const r = /^[\S][\s]/g
// console.log("a       add         a".split(' '))
