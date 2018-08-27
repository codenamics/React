import React, { Component } from "react"
import "../layout/NewsGrid.scss"
import Grid from "../layout/Grid"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getNews } from "../../actions/newsActions"
class Science extends Component {
  componentDidMount() {
    const { science } = this.props
    this.props.getNews(science)
  }
  render() {
    const { news } = this.props
    return (
      <div className="container">
        <div className="headline">
          <h1> Science </h1> <p> The latest and best science articles </p>
        </div>{" "}
        <div className="grid">
          {" "}
          {news.map(el => (
            <Grid key={el.title} el={el} />
          ))}{" "}
        </div>{" "}
      </div>
    )
  }
}

Science.propTypes = {
  news: PropTypes.array.isRequired,
  getNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  news: state.news.news,
})
export default connect(
  mapStateToProps,
  {
    getNews,
  }
)(Science)
