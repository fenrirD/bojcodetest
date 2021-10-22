/**
 * @Date : 2021-09-13
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 *
 * @input
 *
 * @output
 *
 *
 * sing line input
 require('fs').readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
 **/
// 내가 못 푼 문제..... 실패 페일.
// bfs 유형의 문제임... 잘 생각 해보자..
const solution = (arr) => {
  // dx, dy 는 내가 도달할 목표임.
  const [dy, dx] = arr.shift().split(' ')
  console.log(dy)
  // move 는 각각 동 서 남 북
  const move = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const xyd = [0, 0, 0]
  // map 은 이동 거리를 0 으로 구현한 것이다..
  const map = arr.map(_ => [..._].map((__) => +__))
  console.log(map)
  const queue = []
  queue.push(xyd)
  while (queue.length) {
    const [x, y, d] = queue.shift()
    console.log('q=>',x, y, d)
    for (let i = 0; i < move.length; i++) {
      const xPos = x + move[i][0]
      const yPos = y + move[i][1]
      if (map[yPos] && map[yPos][xPos]===1 && xPos >= 0 && yPos >= 0 && xPos < dx && yPos < dy) {
        console.log('in if=>',xPos,yPos,d)
        map[yPos][xPos] = d + 2
        queue.push([xPos, yPos, d + 1])
      }
    }
  }
  console.log(map)
  // 문제 푸는 방법을 찾아보니 각 위치별로 최소 거리를 구하는 로직을 구현하는 방법 인듯..

}

solution(`4 6
101111
101010
101011
111011`.toString().trim().split('\n'))
// solution(`4 6
// 110110
// 110110
// 111111
// 111101`.toString().trim().split('\n'))

const solution02 = (input) => {
  const [yMax, xMax] = input.shift().split(" ");

  const map = input.map(v => v.split("").map(x => +x));
  console.log(map, 'a')
  const stack = [[0, 0, 0]];

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  while (stack.length) {
    const [x, y, dis] = stack.shift();

    for (let i = 0; i < 4; i++) {
      const xPos = x + dir[i][0];
      const yPos = y + dir[i][1];
      console.log(xPos, yPos)
      if (0 <= xPos && 0 <= yPos && xPos < xMax && yPos < yMax) {
        if (map[yPos][xPos] === 1) {
          map[yPos][xPos] = dis + 2;
          stack.push([xPos, yPos, dis + 1]);
        }
      }
    }
    console.log(map)
  }

  console.log(map[yMax - 1][xMax - 1]);
}

// solution02(`4 6
// 101111
// 101010
// 101011
// 111011`.toString().trim().split('\n'))
// solution02(`4 6
// 110110
// 110110
// 111111
// 111101`.toString().trim().split('\n'))
