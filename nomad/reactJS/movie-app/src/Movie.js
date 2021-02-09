import React from "react"
import propTypes from "prop-types"

import "./Movie.css"

// state 를 필요로 하지 않기 때문에 class component가 필요가 없음. 함수형
function Movie({ year, title, summary, poster }) {
  console.log(year, title, summary, poster)
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={poster} alt={title} title={title} />
      </div>
      <div className="movie__data">
        <span className="movie__title">{title}</span>
        <span className="movie__year">{year}</span>
        <p className="movie__description">{summary}</p>
      </div>
    </div>
  )
}
Movie.propTypes = {
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
}

export default Movie
