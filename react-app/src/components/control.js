import react, { Component } from "react"

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <button
            value="create"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode(e.target.value)
            }.bind(this)}
          >
            create
          </button>
        </li>
        <li>
          <button value="update">update</button>
        </li>
        <li>
          <button value="delete">delete</button>
        </li>
      </ul>
    )
  }
}
export default Control
