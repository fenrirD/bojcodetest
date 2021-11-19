/**
 * @Date : 2021-11-18
 * @User : forcewave
 *
 * @problem Number: 1697
 * @problem
 *  수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다.
 *  수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다.
 *  순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.
 *  수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.
 *
 * @input
 * 첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. N과 K는 정수이다.
 * @output
 * 수빈이가 동생을 찾는 가장 빠른 시간을 출력한다.
 *
 * @limit
 * 2 초  128 MB
 *
 * sing line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
 **/


const solution = (args) => {
  const startTime = new Date().getTime()

  const [n, k] = args.map((n) => parseInt(n))
  console.log(n, k)

  const bfs = (nowP, lastP, len) => {
    const visit = new Array(100000)
    visit[nowP] = 1
    let queue = [nowP]

    while (queue.length) {
      let size = queue.length
      if (len < 5) console.log(queue)
      for (let i = 0; i < size; i++) {
        const node = queue.shift()
        visit[node] = 1

        if (!visit[node - 1] && node - 1 >= 0) {
          queue.push(node - 1)
        }

        if (!visit[node + 1] && node + 1 <= 100000) {
          queue.push(node + 1)
        }
        if (!visit[node * 2] && node * 2 <= 100000) {
          queue.push(node * 2)
        }

      }
      queue = [...new Set(queue)]
      if (visit[lastP] === 1) {
        return len
      }
      len++
    }
  }


  const result = bfs(n, k, 0)
  console.log(result)
  const endTime = new Date().getTime()
  console.log("Time:", (endTime - startTime) / 1000)
  return result

}

// 4
solution(
    '5 17'.trim().split(' ')
)
//1
solution(
    '0 1'.trim().split(' ')
)
//
// // 1
// solution(
//     '1 0'.trim().split(' ')
// )
//
solution(
    '1 100000'.trim().split(' ')
)
//
//
solution(
    '100000 1'.trim().split(' ')
)
// solution(
//     '777 100000'.trim().split(' ')
// )
//

