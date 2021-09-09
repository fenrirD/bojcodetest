/**
 * @Date : 2021-09-08
 * @User : forcewave
 *
 * @problemNumber:10820
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

const solution = (input) => {
    console.log(input)
    const getKey = (s) => {
        let key ='l'
        if(/\s/.test(s)) key = 's'
        else if(/\d/.test(s)) key = 'n'
        else if(/[A-Z]/.test(s)) key = 'u'
        return key
    }

    input.map((str)=> {
            const a= Object.values(str.split('').reduce((acc, cur) => {
                let key = getKey(cur)
                return ({
                    ...acc,
                    [key]: acc[key] + 1
                })
            }, {l: 0, u: 0, n: 0, s: 0}))
            console.log(a.join(' '))
        }
    )
}

solution(
    `This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.toString().split('\n')
)

solution(
    `    
    This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.toString().split('\n')
)