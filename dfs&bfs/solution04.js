/**
 * @Date : 2021-09-14
 * @User : forcewave
 *
 * @problemNumber: 11724 (연결요소의개수)
 * @problem
 * 방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.
 * @input
 * 첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2)
 * 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.
 * @output
 * 첫째 줄에 연결 요소의 개수를 출력한다.
 *
 * sing line input
 require('fs').readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
 **/

const solution = (arr) => {
  const [nodeCnt, edge] = arr.shift().split(' ')
  // console.log(arr)
  // 어쨰서 reduce 가 메모리를 많이 사용 할까?
  // const nodes = arr.reduce((acc, cur) => {
  //   const [key, value] = cur.split(' ')
  //       return ({
  //         ...acc,
  //         [cur[key]]: acc[cur[key]] ? [...acc[cur[key]], cur[value]] : [cur[value]]
  //       })
  //     }
  //     , {})
  const nodes = {}
  const nodes2 = Array.from(new Array(parseInt(nodeCnt)), x => [])
  // 이중 배열을 만들 때 from 메소드를 사용하는 이유
  // new Array().fill 의 경우 주소 값을 공유함.
  const visitNodes = []
  arr.forEach((v)=>{
    const [key, value] = v.split(' ')
    nodes2[key - 1].push(value)
    nodes2[value - 1].push(key)
  })
  console.log(nodes)
  console.log(nodes2)


  let cnt = 0
  // const dfs = (node) => {
  //   visitNodes.push(node)
  //   while (nodes[node] && nodes[node].length) {
  //     const nextNode = nodes[node].pop()
  //     if(!visitNodes.includes(nextNode)){
  //       dfs(nextNode)
  //     }
  //   }
  // }

  const dfs2 = (node, idx) => {
    visitNodes.push(idx)
    while (node && node.length) {
      const nextNode = node.pop()
      if(!visitNodes.includes(nextNode - 1)){
        dfs2(nodes2[nextNode - 1], nextNode - 1)
      }
    }
  }

  nodes2.forEach((node, idx)=>{
    if (!visitNodes.includes(idx)) {
      console.log(node)
      dfs2(node, idx)
      cnt++
    }
  })

  // Object.keys(nodes).forEach((key) => {
  //   if (nodes[key].length && !visitNodes.includes(key)) {
  //     dfs(key)
  //     cnt++
  //   }
  // })

  console.log(cnt)

}

solution(`6 5
1 2
2 5
5 1
3 4
4 6`.toString().trim().split('\n'))
// 2
solution(`6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`.toString().trim().split('\n'))
// 1

solution(`3 1
1 2`.toString().trim().split('\n'))

solution(`6 2
1 3
2 3`.toString().trim().split('\n'))