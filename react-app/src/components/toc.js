import react, { Component } from "react"

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (newProps.data === this.props.data) {
      return false
    }
    return true
  }
  render() {
    console.log("toc============")
    var lists = []
    var data = this.props.data
    var i = 0
    while (i < data.length) {
      lists.push(
        // 반복적으로 생성되는 태그에는 구분할 수 있는 key 값을 넣어줘야 함
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault()

              this.props.onChangePage(e.target.dataset.id)
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      )
      i++
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    )
  }
}
export default TOC
