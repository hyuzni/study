import React from "react"
import propTypes from "prop-types"

// function Potato({ name }) {
//   return <h3>i love potato {name}</h3>
// }
function Potato(props) {
  return <h3>i love potato {props.name}</h3>
}

Potato.propTypes = {
  name: propTypes.string.isRequired,
}
export default Potato
