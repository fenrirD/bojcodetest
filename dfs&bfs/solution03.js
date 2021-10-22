/**
 * @Date : 2021-09-13
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 *
 * @input
 * 입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다.
 * 그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은
 * 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50), 그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다.
 * 그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다. 두 배추의 위치가 같은 경우는 없다.
 * @output
 * 각 테스트 케이스에 대해 필요한 최소의 배추흰지렁이 마리 수를 출력한다
 *
 * sing line input
 require('fs').readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
 **/

const solution = (arr) => {
  const [testCaseCnt, ...testCase] = arr
  // 상 하 좌 우....
  const movement = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  // const t = testCase.reduce((acc, cur,idx) => {
  //   const curs = cur.split('  ')
  //   const [x, y, cnt] = curs
  //   if (curs.length >= 3) {
  //     console.log('acc',acc.length)
  //     return [...acc, Array.from(new Array(parseInt(y)), () => new Array(parseInt(x)).fill(0))]
  //   } else {
  //     acc[acc.length - 1][y][x] = 1
  //     return [...acc]
  //   }
  // }, [])
  // console.log(t)
  const fn = (t) => {
    let queue = []
    const result = []

    let cnt = 0
    for (let i = 0; i < t.length; i++) {
      for (let j = 0; j < t[0].length; j++) {
        // console.log(t[0])
        if (t[i][j]) {
          queue.push([i, j])
          while (queue.length) {
            const [x, y] = queue.shift()
            // if(queue.length>1) queue = [...new Set(queue.map(_=>_.join()))].map(_=>_.split(',').map(__=>+__))
            console.log('queue',queue)
            for (let k = 0; k < movement.length; k++) {
              const xPos = x + movement[k][1]
              const yPos = y + movement[k][0]
              if (t[xPos]) {
                if (t[xPos][yPos]) {
                  // console.log([xPos, yPos],'=>',[x,y])
                  queue.push([xPos, yPos])
                }
                t[x][y] = 0
              }
            }
          }
          cnt++
        }

      }
    }
    return cnt
  }


  let arrs = []
  while (testCase.length) {
    const [x, y, cnt] = testCase.shift().split(' ')
    if (cnt) {
      if (arrs.length) {
        console.log(fn(arrs))
      }
      arrs = Array.from(new Array(parseInt(y)), () => new Array(parseInt(x)).fill(0))
    } else {
      arrs[y][x] = 1
      if(!testCase.length) console.log(fn(arrs))
    }
  }
}

solution(`2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.toString().trim().split('\n'))
// solution(`1
// 5 3 6
// 0 2
// 1 2
// 2 2
// 3 2
// 4 2
// 4 0
// `.toString().trim().split('\n'))
