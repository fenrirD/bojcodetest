/**
 * @Date : 2021-08-27
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 *
 * L    커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
 * D    커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
 * B    커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
 * 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
 * P $    $라는 문자를 커서 왼쪽에 추가함
 *
 * @input
 * 첫째 줄에는 초기에 편집기에 입력되어 있는 문자열이 주어진다. 이 문자열은 길이가 N이고, 영어 소문자로만 이루어져 있으며, 길이는 100,000을 넘지 않는다.
 * 둘째 줄에는 입력할 명령어의 개수를 나타내는 정수 M(1 ≤ M ≤ 500,000)이 주어진다. 셋째 줄부터 M개의 줄에 걸쳐 입력할 명령어가 순서대로 주어진다.
 * 명령어는 위의 네 가지 중 하나의 형태로만 주어진다.
 *
 * @output
 * 첫째 줄에 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 출력한다.
 *
 * sing line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 입력을 구분한다.
 * mulit line input
 var fs = require('fs');
 var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 개행문자로 입력을 구분한다.
 **/
/**
 * time qhrwkqehrk dPalsgkek. wndmlgkwk. o(n)
 * @param array
 */

// abcdyx
export
const solution = (array: string[]) => {
    const [initStr, cmdCnt, ...cmds] = array
    // const answer = initStr.split('')
    // let cursor : number = initStr.length
    // console.log(answer)
    // const increment = (cursor : number) => cursor === answer.length ? answer.length : cursor + 1
    // const decrement = (cursor : number) => cursor === 0 ? 0 : cursor - 1
    const l = initStr.split('')
    const r = []

    cmds.forEach(e => {
        const [cmd, char] = e.split(' ')
        switch (cmd) {
            case 'L' :
                r.push(l.pop())
                // cursor = decrement(cursor)
                break;
            case 'D' :
                l.push(r.pop())
                // cursor = increment(cursor)
                break;
            case 'B' :
                l.pop()
                // let delCnt = cursor ? 1 : 0
                // answer.splice(cursor - 1, delCnt)
                // cursor = decrement(cursor)
                break;
            case 'P' :
                l.push(char)
                // answer.splice(cursor, 0, char)
                // cursor = increment(cursor)
                break;
        }
    })
    // console.log(answer.join(''))
    console.log(l.concat(r.reverse()).join(''))
}

solution(`
abcd
3
P x
L
P y
`.trim().split('\n'));

solution(`
abc
9
L
L
L
L
L
P x
L
B
P y
`.trim().split('\n'))

solution(`
dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z
`.trim().split('\n'))