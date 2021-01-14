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
          <button
            value="update"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode(e.target.value)
            }.bind(this)}
          >
            update
          </button>
        </li>
        <li>
          <button
            value="delete"
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangeMode(e.target.value)
            }.bind(this)}
          >
            delete
          </button>
        </li>
      </ul>
    )
  }
}
export default Control
