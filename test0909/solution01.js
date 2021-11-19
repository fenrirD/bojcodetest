/**
 * @Date : 2021-09-09
 * @User : forcewave
 *
 * @problemNumber: 1260
 * @problem
 *
 * @input
 * 8 9 10
 * @output
 * 1 2 8 9 10
 *
 * sing line input
 require('fs').readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
 **/

/*
* 정점의 개수 : 4
* 간선의 개수 : 5
* 시작 노드 : 1
* dfs bfs 의 기초를 습득하자.
*
* */
// dfs 는 깊이우선탐색으로 시작 노드부터 제일 왼쪽 노드의 최 하위까지 간 후 다시 시작노드로부터 그 다음 노드 진행
// 꼭 return 이 아닌 visitNodes를 사용해야 할까??
const dfs = (selectNodeNum, nodes, visitNodes) => {
    visitNodes.push(selectNodeNum)
    let selectNode = nodes[selectNodeNum]

    let nextNode
    while (selectNode&&selectNode.length) {
        nextNode = selectNode.pop()
        if(!visitNodes.includes(nextNode)) dfs(nextNode, nodes, visitNodes)
    }
}
// bfs 는 너비우선탐색으로 1의 모든 노드를 방문 후 , 그 다음 노드를 방문한다 .
const bfs = (selectNodeNum, nodes, visitNodes) => {
    let queue = []
    visitNodes.push(selectNodeNum)
    queue.push(selectNodeNum)
    let nextNode
    while (queue.length) {
        let selectNode = nodes[queue.shift()]
        while (selectNode&&selectNode.length) {
            nextNode = selectNode.pop()
            if(!visitNodes.includes(nextNode)) {
                visitNodes.push(nextNode)
                queue.push(nextNode)
            }
        }
    }
}

const solution = ([info, ...arr]) => {
    // console.log(info, arr)
    const [nodeCnt, lineCnt, startNode] = info.split(' ')
    // if(!lineCnt) return console.log(startNode)
    // 우선 최소 값으로 정리하자...
    const nodes = arr.reduce((acc, cur, idx) => {
        let [a1, a3] = cur.split(' ')
        return (
            {
                ...acc,
                [a1]: acc[a1] ? acc[a1].concat(a3) : [a3],
                [a3]: acc[a3] ? acc[a3].concat(a1) : [a1]
            })
    }, {})
    Object.values(nodes).map((_)=>_.sort((a,b)=>b-a))
    // console.log(nodes,'nodes')
    // 와 신기하다. es6에서 객체 혹은 배열의 복제는 한 수준만 복제한다. 하위 요소들은 여전히 참조 값..
    const nodes2 = JSON.parse(JSON.stringify(nodes))
    const visitNodes = []
    dfs(startNode, nodes, visitNodes)
    // console.log(nodes2)
    const visitNodes2 = []
    console.log(nodes2)
    bfs(startNode, nodes2, visitNodes2)
    console.log(visitNodes.join(' '))
    console.log(visitNodes2.join(' '))
}

solution(
    `4 5 1
1 2
1 3
1 4
2 4
3 4
`.toString().trim().split('\n'))
solution(
    `5 5 3
5 4
5 2
1 2
3 4
3 1
`.toString().trim().split('\n'))

solution(
    `1000 1 1000
999 1000
`.toString().trim().split('\n'))

solution(
    `3 1 1
2 3
`.toString().trim().split('\n'))
