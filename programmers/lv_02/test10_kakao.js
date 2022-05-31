/**
 * @Date : 2022-05-30
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/92342
 * @input
 *
 * @output
 5,    [2,1,1,1,0,0,0,0,0,0,0],  [0,2,2,0,1,0,0,0,0,0,0],
 1,    [1,0,0,0,0,0,0,0,0,0,0],  [-1],
 9,    [0,0,1,2,0,1,1,1,1,1,1],  [1,1,2,0,1,2,2,0,0,0,0],
 10,    [0,0,0,0,0,0,0,0,3,4,3],  [1,1,1,1,1,1,1,1,0,0,2],
 kakao 문제는 꼭 다시 풀어보자.
 **/

const solution = (n, info) => {
  // Rule 정리
  // 1. info는 0 -> 10점 , 10-> 0점임
  // 2. n은 화살의 수(어피치와 라이언의 화살수는 같음)
  // 3. 각 점수를 많이 쏜 사람이 해당 점수 흭득함
  // 4. 동률이라면 무조건 어피치 승
  // 5. 리턴 값은 라이언이 큰 점수차로 이기는 값을 찾아야 함.
  // 6. 점수차가 동일하다면 낮은 점수를 더 많이 쏜게 유리함.

  let wins = []
  let maxScore = 0
  const calcScore = (ryan) => {
    // console.log(ryan)
    let score = [0,0]
    // 점수 계산을 위한
    // console.log(info, ryan)
    for (let i = 0; i < info.length; i++) {
      let value = 10 - i
      ryan[i] > info[i] ? score[0]+= value : info[i] ? score[1] += value : score[1] += 0
    }
    const gap = score[0] - score[1]
    if(gap>maxScore){
      maxScore = gap
      wins = [...ryan]
    } else if( gap === maxScore) {
      let isFlag = true
      for (let i = wins.length-1; i >= 0; i--) {
        if(wins[i] === ryan[i]){
          continue
        }
        if(wins[i] > ryan[i]){
          isFlag = false
          break
        } else {
          isFlag = true
          break
        }
      }
      wins = isFlag ? [...ryan] : wins
    }
    // console.log(score)
  }

  const dfs = (cnt, idx, ryan) => {
    if (cnt == 0 || info.length === idx) {
      // console.log(cnt, idx, ryan)
      // 0점에 점수 몰아 넣기
      ryan[ryan.length-1] = cnt
      if(ryan.reduce((a,b)=>a+b) === n) {

        // console.log('----------')
        // console.log(ryan)
        calcScore(ryan)
        // console.log(cnt, idx)
      }
      return;
    }


    // 이긴 경우
    if(cnt > 0) {
      ryan[idx] = info[idx] + 1
      dfs(cnt - ryan[idx], idx + 1, ryan)
      ryan[idx] = 0
      dfs(cnt, idx+1, ryan)
    }


    // 진 경우

  };


  // 이기거나 지거나
  // 질꺼면 아예 0점(아쉽게 지는건 필요 없음)
  const ryan = new Array(info.length).fill(0)
  dfs(n, 0, ryan)
  return wins.length && maxScore ? wins : [-1]
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0],))
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0]))

// console.log(solution(9,	  [0,0,1,2,0,1,1,1,1,1,1]))
// console.log(solution([1, 2], [3, 4]))
// console.log(solution([1, 1, 1], [1, 1,1]))
// console.log(solution([3, 6, 9], [0, 0,0]))
// console.log(solution([3, 3, 3], [3, 3,5]))
// console.log(solution([3, 0, 1], [0, 2,1]))
// console.log(solution("cdcd"))