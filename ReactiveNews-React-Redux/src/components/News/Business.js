import React, { Component } from "react"
import "../layout/NewsGrid.scss"
import Grid from "../layout/Grid"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getNews } from "../../actions/newsActions"

class Business extends Component {
  componentDidMount() {
    const { business } = this.props
    this.props.getNews(business)
  }
  render() {
    const { news } = this.props
    return (
      <div className="container">
        <div className="headline">
          <h1> Business </h1> <p> The latest and best business articles </p>
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
Business.propTypes = {
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
)(Business)
