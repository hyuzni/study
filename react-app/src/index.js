import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createStore } from "redux"

const reducer = (state, action) => {
  console.log(action)
  if (action.type === "changeState") {
    return action.payload.newState
  }
  return "State"
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // store 는 처음 생성 시 reducer function 을 실행함.
console.log(store, store.getState())

const action = {
  type: "changeState",
  payload: {
    newState: "New State",
  },
}
store.subscribe(() => console.log(store.getState()))
store.dispatch(action)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
