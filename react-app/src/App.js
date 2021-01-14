import React, { Component } from "react"
import TOC from "./components/toc"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Subject from "./components/subject"
import Control from "./components/control"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3
    this.state = {
      mode: "welcome",
      subject: { title: "WEB", sub: "world wide web!" },
      welcome: { title: "welcome", desc: "Hello, React!" },
      selected_id: 2,
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HiperText Markup Language" },
        { id: 2, title: "CSS", desc: "CSS is cascading Style Sheets" },
        { id: 3, title: "JS", desc: "Java Script" },
      ],
    }
  }
  getReadContent() {
    var i = 0
    while (i < this.state.contents.length) {
      var data = this.state.contents[i]
      if (data.id === this.state.selected_id) {
        return data
        // _title = data.title
        // _desc = data.desc
        break
      }
      i++
    }
  }
  getContent() {
    var _title,
      _desc,
      _article = null
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent()
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1
            /* this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc }) */
            // 원본 데이터를 바꾸지 않고 복제본을 이용하기 위해 push 보단 concat을 사용. 그래야 shouldComponentUpdate 함수에서 비교를 할 수 있음
            // var _contents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc })
            var newContents = Array.from(this.state.contents)
            newContents.push({ id: this.max_content_id, title: _title, desc: _desc })
            this.setState({
              contents: newContents,
              mode: "read",
            })
          }.bind(this)}
        ></CreateContent>
      )
    } else if (this.state.mode === "update") {
      var _content = this.getReadContent()
      _article = (
        <UpdateContent
          id={_content.id}
          title={_content.title}
          desc={_content.desc}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents)
            var i = 0
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc }
                break
              }
              i++
            }
            this.setState({
              contents: _contents,
              mode: "read",
            })
          }.bind(this)}
        ></UpdateContent>
      )
    } else if (this.state.mode === "delete") {
      var _content = this.getReadContent()
    }
    return _article
  }
  // react 에서는 props나 state 가 바뀌면 render() 함수를 다시 실행하여 html을 그린다.
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" })
          }.bind(this)}
        ></Subject>
        <Control
          onChangeMode={function (action) {
            if (action === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents)
                var i = 0
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_id) {
                    _contents.splice(i, 1)
                    break
                  }
                  i++
                }
                alert("deleted!")
                this.setState({ mode: "welcome", contents: _contents })
              }
            } else {
              this.setState({ mode: action })
            }
          }.bind(this)}
        ></Control>
        <TOC
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_id: Number(id) })
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        {this.getContent()}
      </div>
    )
  }
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
