/**
 * @Date : 2021-09-03
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
**/

/*
* [100,90,98,88,65],
* [50,45,99,85,77],
* [47,88,95,80,67],
* [61,57,100,80,65],
* [24,90,94,75,65]
*
*
* */
const solution = (scores) =>
    scores.map((score,idx)=>{
        const std = score.reduce((acc, num, idx2)=> {
            const max = Math.max(acc['max'],scores[idx2][idx]);
            const min = Math.min(acc['min'],scores[idx2][idx]);
            return ({
                max,
                min,
                isMax: max <= scores[idx][idx],
                isMin: min >= scores[idx][idx],
                sum: acc['sum']+ scores[idx2][idx],
                same: scores[idx][idx] === scores[idx2][idx] ? acc['same']+1 : acc['same']
            })
        }, {max:score[idx], min:score[idx],isMax: 0, isMin: 0, sum:0, same: 0})
        const isMinus = (std['isMax'] || std['isMin']) && std['same'] === 1
        const lastScore = isMinus ? ( (std['sum'] - score[idx]) / (score.length -1) ) : std['sum'] / score.length

        if(90<=lastScore) return 'A'
        else if(80<=lastScore) return 'B'
        else if(70<=lastScore) return 'C'
        else if(50>lastScore) return 'F'
        else return "D"
    }).join('')

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]))
console.log(solution([[50,90],[50,87]]))
console.log(solution([[70,49,90],[68,50,38],[73,31,100]]))
console.log(solution([[73,49,73],[68,50,38],[73,31,100]]))