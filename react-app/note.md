redux 설치
$ npx create-react-app [프로젝트명] --template redux

기존 react 프로젝트 내에 설치
$ npm i redux
$ npm i react-redux

redux 참고사항

1. 어플리케이션 전체의 상태(state)는 트리 형태로 하나의 오브젝트로 만들어져, 하나의 Store에 보관된다.
2. state is read-only. 상태를 변경할 수 있는 수단은, 변경내용을 가진 action 오브젝트로 실행하는 것 뿐이다.
3. action이 어떻게 state를 변경시키는가는 [Reducer]가 결정한다.
   : Reducer 는 state와 action을 받아서 새로운 상태로 반환하는 함수이다.
   현재 state 오브젝트를 변경시키는 것이 아니라, 새로운 state 오브젝트를 만들어 반환하는 것이 포인트

Action
$const ADD_TODO = 'ADD_TODO'{ type: ADD_TODO, text: 'Build my first Redux app'}
1.action은 어플리케이션으로부터의 정보를 store에 보내기 위한 오브젝트이다.
2.action은 store.dispatch()로 store에 보내진다.
3.action은 무엇을 행하는지 식별하기 위해 “type”프로퍼티를 반드시 가져야한다. 다른 프로퍼티를 쓰는 것은 자유.

// import 모듈화된 actiontypes.
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'

// action creator
function addTodo(text) {
return {
type: ADD_TODO,
text
}
}

// active creator 를 이용한 dispatch 작성
dispatch(addTodo(text))
dispatch(completeTodo(index))

// react-redux 라이브러리의 connect를 이용한 헬퍼의 bindActionCreators() 이용
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
​
let bindActionCreators = bindActionCreators(TodoActionCreators, dispatch)

// https://medium.com/@ca3rot
// https://eastflag.co.kr/react/scoreboard-advanced/redux-tutorial/
