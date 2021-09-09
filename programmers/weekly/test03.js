/**
 * @Date : 2021-09-07
 * @User : forcewave
 * 
 * @problem Number: 
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

// 추후 더 생각해보자...
const solution = (gb, tb) => {
    // 처음 위치는 0,0 부터 시작하자...
    let x = 0
    let y = 0
    // const polygon = []
    const result = []
    // for (let i = 0; i < tb.length; i++) {
    //     const polygon = []
    //     for (let j = 0; j <tb.length; j++) {
    //         // 0 이면 패스
    //         let num = tb[i][j]
    //         if(num) polygon.push({i,j})
    //         if(!tb[i][j+1]) {
    //             i++
    //         }
    //     }
    // }
    let polygon = []

    while (true) {
        let num = tb[x][y]
        console.log(x,y,num)
        if(num) {
            polygon.push({x,y})

            // if(x+1===tb.length ) continue
            let lp = polygon[polygon.length-2]
            // 1. 오른쪽 확인
            // 2. 왼쪽 확인
            // 3. 하단 확인
            if(tb[x][y+1]){
                // 오른쪽 일때
                y++
            } else if(tb[x][y-1] && (lp.x===x-1 && lp.y===y)) {
                // 왼쪽 일때,
                y--
            } else if(x+1!==tb.length&&tb[x+1][y]){
                // 하단
                x++
            } //else if(tb[x-1][y]) x--
            else {
                x=0
                y=0
                result.push(...polygon)
                polygon.forEach(({x,y})=>{
                    tb[x][y] = 0
                })
                polygon = []
            }
        } else if(x===tb.length - 1 && y===tb.length - 1){
            break;
        } else if(y===tb.length - 1){
            x++
            y=0
        } else if(x===tb.length - 1){
            y++
        }
        else{
            y++
        }

    }
    console.log(result)


}

solution(
    [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]],
    [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]
    )