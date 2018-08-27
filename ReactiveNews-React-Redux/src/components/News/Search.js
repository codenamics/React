import React, { Component } from "react"
import "../layout/NewsGrid.scss"
import Grid from "../layout/Grid"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import uuid from "uuid"
class Search extends Component {
  state = {
    id: uuid(),
  }
  render() {
    const { news } = this.props
    console.log(news)
    const { id } = this.state
    return (
      <div className="container">
        <div className="headline">
          <h1> Top headlines </h1>{" "}
          <p> The latest and best headlines articles </p>{" "}
        </div>{" "}
        <div className="grid">
          {" "}
          {news.map(el => (
            <Grid key={id} el={el} />
          ))}{" "}
        </div>{" "}
      </div>
    )
  }
}
Search.propTypes = {
  news: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  news: state.news.news,
})

export default connect(
  mapStateToProps,

  null
)(Search)
