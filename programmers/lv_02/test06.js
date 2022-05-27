/**
 * @Date : 2022-05-26
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/12949

 * @input
 * [[1, 4], [3, 2], [4, 1]] | [[3, 3], [3, 3]] | [[15, 15], [15, 15], [15, 15]]
 * [[2, 3, 2], [4, 2, 4], [3, 1, 4]] | [[5, 4, 3], [2, 4, 1], [3, 1, 1]] | [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
 * @output


 **/



const solution = (arr1, arr2) => {
  // [1, 4] [3,3] | [15, 15]
  // [3, 2] [3,3] | [15, 15]
  // [4, 1]       | [15, 15]
  // 0,0 * 0,0
  // 0,1 * 1,0
  // 1,0 * 0,0
  // 1,1 * 1,0
  // 2,0 * 0,0
  // 2,1 * 1,0
  // ---
  // 0,0 * 1,0
  // 0,1 * 1,1
  // 1,0 * 1,0
  // 1,1 * 1,1
  // 2,0 * 1,0
  // 2,1 * 1,1
  // [2, 3, 2] [5, 4, 3] | [28]
  // [4, 2, 4] [2, 4, 1] |
  // [3, 1, 4] [3, 1, 1] |
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2[0].length; j++) {
  //     console.log(i,j,'arr1[j][i]:',arr1[i][j], ' arr2[i][j]:',arr2[j][i] , ' arr1[i]*arr2[j]:',arr1[i][j]*arr2[j][i])
  //   }
  // }
  const arr = new Array(arr1.length).fill(0).map(()=>new Array(arr2[0].length).fill(0))
  // console.log(arr)/**/
  // 앞 행렬의 행만큼 반복
  for (let k = 0; k < arr1.length; k++) {
    // 뒤 행렬의 열 만큼
    for (let i = 0; i < arr2[0].length; i++) {

      for (let j = 0; j < arr1[0].length; j++) {
        // console.log(i,j ,"|" ,j,i, 'arr1[i][j]:', arr1[k][j], 'arr2[j][i]', arr2[j][i], 'arr1[k][j]*arr2[j][i]:',arr1[k][j]*arr2[j][i])
        arr[k][i] += arr1[k][j]*arr2[j][i]
      }
    }
  }
  return arr
  
}

function solution2(arr1, arr2) {
  // 정답인 2차원 배열을 초기화할 때 첫째 행렬의 행의 갯수와, 둘째 행렬의 열의 갯수로 만들어준다.
  // 0으로 값을 채워줘야 덧셈이 가능하다 (0으로 안할 경우 NaN)
  let answer = Array.from(Array(arr1.length), () => new Array(arr2[0].length).fill(0));

  // 행의 길이만큼 반복
  for(let i = 0; i < arr1.length; i++) {
    // 열의 길이만큼 반복
    for(let j = 0; j < arr2[0].length; j++) {
      //  연산 횟수 (두개의 행렬 길이가 같은 값)
      // arr1[0].length || arr2.length
      for(let count = 0; count < arr1[0].length; count++) {
        answer[i][j] += arr1[i][count] * arr2[count][j]
      }
    }
  }
  return answer
};
console.log(solution2([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]])) // 	"1 4"
// console.log(solution2([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]])) // 	"1 4"
// console.log(solution2([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])) // 	"1 4"
// console.log(solution2([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4], [2, 4], [3, 1]])) // 	"1 4"
// console.log(solution2([[1,2],[3, 4]], [[5, 6], [7, 8]])) // 	"1 4"
// console.log(solution2([[0,0],[3, 4]], [[0, 0], [7, 8]])) // 	"1 4"
// console.log(solution2([[1,2]], [[3], [7]])) // 	"1 4"
// console.log(solution2([[80, 90, 60],[75, 80, 90], [90, 95,65], [99,70,70]], [[3, 1], [3, 8], [4,1]])) // 	"1 4"


console.log(solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]])) // 	"1 4"
console.log(solution([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]])) // 	"1 4"
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])) // 	"1 4"
// console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4], [2, 4], [3, 1]])) // 	"1 4"
// console.log(solution([[1,2],[3, 4]], [[5, 6], [7, 8]])) // 	"1 4"
// console.log(solution([[0,0],[3, 4]], [[0, 0], [7, 8]])) // 	"1 4"
// console.log(solution([[1,2]], [[3], [7]])) // 	"1 4"
// console.log(solution([[80, 90, 60],[75, 80, 90], [90, 95,65], [99,70,70]], [[3, 1], [3, 8], [4,1]])) // 	"1 4"

/*
* 2 3 2 | 5 4 | 2*5 + 3*2 + 2*3 2*4 + 3*4 + 2*1
* 4 2 4 | 2 4 |
* 3 1 4 | 3 1 |
* */
// 0 0 | 0 0 | 0 0
// 3 4 | 7 8 |

// console.log(solution("-1 -2 -3 -4"))// 	"-4 -1"
// console.log(solution("-1 -1"	))// "-1 -1"

