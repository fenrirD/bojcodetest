/**
 * @Date : 2022-05-27
 * @User : forcewave
 * 
 * @problemNumber: 
 * @problem
 * https://programmers.co.kr/learn/courses/30/lessons/42888
 * record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
 * 다음은 record에 담긴 문자열에 대한 설명이다.
 * 모든 유저는 [유저 아이디]로 구분한다.
 * [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
 * [유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
 * [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
 * 첫 단어는 Enter, Leave, Change 중 하나이다.
 * 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
 * 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
 * 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
 * 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
 * @input
 *
 * @output
 * ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
 * ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

**/

const solution = (arr) => {
  const names = {}
  const actions = {
    Enter:(id, nickName)=>{
      names[id]= nickName
      return [id,'님이 들어왔습니다.']
    },
    Leave:(id)=>[id,'님이 나갔습니다.'],
    Change:(id, nickName)=>names[id]= nickName,
  }

  return arr.map((a)=> {
    const [action, id, nickName] = a.split(' ')
    return actions[action].call(this,id, nickName)
  }).filter((a)=>Array.isArray(a)).map(a=> names[a[0]]+a[1])
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])