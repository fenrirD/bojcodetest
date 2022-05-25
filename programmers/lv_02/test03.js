/**
 * @Date : 2022-05-24
 * @User : forcewave
 *
 * @problemNumber:
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/12980
 * @input
 * 순간이동시 전력 x
 * 한칸 이동시 전력 1
 * @output


 **/



const solution = (n) => {
  const obj = {
    forward: (n) => n + 1,
    teleport: (n) => n * 2
  }

  // 생각해 보면 무조건 1은 이동해야 됨!
  // 현 위치
  let point = 1
  // 전력 사용량
  let electronic = 1
  const targetPoint = n
  // 처음에 1칸 전진
  // 1 에서
  // 전진: 2 전력 2
  // 텔포: 2 전력 1
  //
  //  bfs 방식으로 구현해야 함.
  const arr = [[1]]
  //[[1],[2,2], []]
  // 1f
  // forword면 푸쉬 tel이면 팝 후 푸쉬!
  // [[1]]
  // [1,2], [2]
  // [1,2,3], [2,3], [1,2,4], [4]
  // [1,2,3,4], [2,3,4,8], [1,2,4,5], [1,2,4,8], [4,5], [8]
  // 3f 4t 3f 4t
  // 4f 6t 5t 8f
  // let cnt = 0
  // let points = []
  // while (!points.length) {
  // console.log("cnt : arr",cnt, arr)
  // console.log(arr)
  //   for (const key in arr) {
  //     const pop = arr[key].pop()
  //     const teleport = pop * 2
  //     const jump = pop + 1
  //     if(teleport <= n ){
  //       arr.push([...arr[key],teleport])
  //     }
  //     if(jump <= n) {
  //       arr[key].push(pop)
  //       arr[key].push(jump)
  //     }
  //     if(teleport===n || jump===n) {
  //       // console.log('tel:',teleport, "jump",jump, arr[key], arr[arr.length-1])
  //       points = teleport === n ? arr[arr.length-1] : arr[key]
  //       break
  //     }
  //   }
  //   cnt++
  // }
  // // console.log(arr, points)
  // return points.length
}

// console.log(solution(5)) //2
// console.log(solution(6)) //2 => 1f 2t 3f 6t
// console.log(solution(5000)) //5


// const solution2 = (n) => {
//   const arr = [[1]]
//   let cnt = 0
//   while (!arr.filter(arr2 => arr2.includes(n)).length) {
//     for (const key in arr) {
//       const pop = arr[key].pop()
//       const teleport = pop * 2
//       const jump = pop + 1
//       if (teleport <= n) {
//         arr.push([...arr[key], teleport])
//       }
//       if (jump <= n) {
//         arr[key].push(pop)
//         arr[key].push(jump)
//       }
//     }
//     cnt++
//   }
//   console.log(arr[arr.length-1])
//   return Math.min(...arr.filter(arr2 => arr2.includes(n)).map((a) => a.length))
// }
// console.log(solution2(5)) //2
// console.log(solution2(6)) //2 => 1f 2t 3f 6t
// console.log(solution2(5000)) //5

const solution3 = (n) => {
  const arr = [[n]]
  let cnt = 0
  let an = 0
  while (!an) {

    for (const key in arr) {
      const pop = arr[key].pop()
      const teleport = pop / 2
      const jump = pop - 1
      if (teleport > 0 && Number.isInteger(teleport)) {
        arr.push([...arr[key], teleport])
      }
      if (jump > 0 && Number.isInteger(jump)) {
        arr[key].push(pop)
        arr[key].push(jump)
      }
      if(jump === 1 || teleport === 1){
        console.log('tel:',teleport, arr[arr.length-1],' jum:',jump,arr[key], arr )
        an = arr.pop().length
      }

    }
    cnt++
  }
  // console.log(arr)
  return an
}
// console.log(solution3(1)) //2
// console.log(solution3( 1000000000)) //2
console.log(solution3(6)) //2 => 1f 2t 3f 6t
// console.log(solution3(50000000)) //5