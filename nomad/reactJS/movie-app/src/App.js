import React from "react"
import Potato from "./Potato"
import propTypes from "prop-types"

// let something = ""
// something.propTypes = {
//   1: propTypes.string.isRequired,
//   2: propTypes.number.isRequired,
//   3: propTypes.boolean.isRequired,
//   4: propTypes.array.isRequired,
//   5: propTypes.object.isRequired,
// }

class App extends React.Component {
  render() {
    return <h1>I am class component</h1>
  }
}
// function App() {
//   return (
//     <div>
//       Hello
//       <Potato name="test" />
//     </div>
//   )
//}

export default App
