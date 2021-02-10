import React from "react"
import axios from "axios"
import Movie from "./Movie"

import "./App.css"
import "./Base.css"

// let something = ""
// something.propTypes = {
//   1: propTypes.string.isRequired,
//   2: propTypes.number.isRequired,
//   3: propTypes.boolean.isRequired,
//   4: propTypes.array.isRequired,
//   5: propTypes.object.isRequired,
// }
//https://yts-proxy.now.sh/list_movies.json
// fetch() 보단 axios
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    isLoading: true,
    movies: [],
    12356 : 
  }
  getMovies = async () => {
    // async와 await 는 세트임. 혼자서 쓰일 수 없음. es6 문법 참고
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")

    // movies.data.data.movies 를 변형한 es6 표현
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    // fetch() 보단 axios : fetch()의 layer 같은? 아이. npm install axios
    console.log(movies)
    this.setState({ movies, isLoading: false }) // state.movies : axios.movies 의 함축 표현. es6 표현
  }
  componentDidMount() {
    // component가 mount 되자마자 실행
    this.getMovies()
    console.log("===> componentDidMount")
  }
  componentDidUpdate() {
    // arg : prevProps, prevState, snapshot
    //setstate()
    console.log("===> componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("===> componentWillUnmount")
  }
  render() {
    const { isLoading, movies } = this.state // es6 : this.state.isLoading
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              // map 을 사용할 때 return은 필수. 에러는 안나지만 주의.
              return (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              )
            })}
          </div>
        )}
      </section>
    )
  }
}

export default App
