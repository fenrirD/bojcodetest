/**
 * @Date : 2022-05-18
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/92334?language=javascript
 * @input
 * [[60, 50], [30, 70], [60, 30], [80, 40]]
 * @output
**/
const result = {
  6:1,
  5:2,
  4:3,
  3:4,
  2:5,
  1:6,
  0:6,
}
const solution2Map = (id_list, report, k) => {
  const reports = [...new Set(report)].map((user)=>user.split(' '));
  console.log(reports)

  const cnt = new Map()
  for (let r of reports) {
    const [r0, r1] = r
    cnt.set(r1, cnt.get(r1)+1 ||1)
  }

  const user = new Map()
  for (let r of reports) {
    const [r0, r1] = r
    if(cnt.get(r1) >= k){
      user.set(r0, user.get(r0)+1 ||1)
    }
  }
  return id_list.map((id)=> user.get(id)||0)

}

console.log(solution2Map(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	, 2))
console.log(solution2Map(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"]	, 3))

const solution2ForLoop = (id_list, report, k) => {
  // id 리스트를 오브젝트화
  const obj = {}
  for(let ids of id_list) {
    obj[ids] = 0
  }
  // 리풋 리스트를 오브젝화.. + 중복 제거도
  const rObj = {}
  for(let users of report) {
    const [from, to] = users.split(' ')
    if(rObj[to]){

      rObj[to].push(from)
      rObj[to] = [...new Set(rObj[to])]
    } else {
      rObj[to] = [from]
    }
  }

  console.log(obj,rObj)
  for(let bl in rObj) {
    const bls = rObj[bl]
    if(bls.length >=k) {
      for(let b of bls) {
        obj[b]++
      }
    }
  }
  return Object.values(obj)
}

// console.log(solution2ForLoop(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	, 2))
// console.log(solution2ForLoop(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"]	, 3))

const solution = (id_list, report, k) => {
  // id_list = 아디디 목록
  // report = 누가 누구를 리풋했는지
  // k 정지횟수

  const obj = id_list.reduce((acc, cur)=> ({...acc, [cur]:0}),{})

  const rObj = {}
  // 1. 중복제거 후 투표 당한 친구들
  console.log(obj)
  const none_user = [...new Set(report)].map((user)=>user.split(' '));

  console.log(none_user)

  const blackList = none_user.reduce((acc,cur) =>{
    const r_user = cur[1];
    return (
        {
          ...acc,
          [r_user]: acc[r_user] + 1 || 1
        }
    )
  },{});

  for(let bl in blackList) {
    const bls = blackList[bl]
    if(bls.length >=k) {
      for(let b of bls) {
        obj[b]++
      }
    }
  }

  console.log(blackList, none_user)
  return Object.values(obj)
}


// console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	, 2))
// 2 1 1 0
// console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"]	, 3))
