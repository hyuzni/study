import react, { Component } from "react"

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>CREATE</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault()
            this.props.onSubmit(e.target.title.value, e.target.desc.value)
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea type="text" name="desc" placeholder="desc"></textarea>
          </p>
          <p>
            <button type="submit">submit</button>
          </p>
        </form>
      </article>
    )
  }
}
export default CreateContent
