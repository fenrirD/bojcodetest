/**
 * @Date : 2022-05-27
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 * @input
 *
 * @output
 * baabaa  1
 * cdcd  0
  Stack 문제를 뭘 그렇게 어렵게 풀고 있었나.. 현타 옵니다 :)

 **/
const solution2 = (s) => {
  const stack = [s[0]]

  for (let i = 1; i < s.length; i++) {
    const pop = stack.pop()
    const target = s[i]
    if (pop === target) {

    } else {

      if (pop) stack.push(pop)
      stack.push(target)
    }

  }

  console.log(stack)
  return stack.length ? 0 : 1
}

console.log(solution2("baabaa"))
console.log(solution2("cdcd"))