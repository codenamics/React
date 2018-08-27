import React, { Component } from "react"
import "../layout/NewsGrid.scss"
import Grid from "../layout/Grid"
import { connect } from "react-redux"
import { getNews } from "../../actions/newsActions"
import PropTypes from "prop-types"

class Health extends Component {
  componentDidMount() {
    const { health } = this.props
    this.props.getNews(health)
  }
  render() {
    const { news } = this.props
    return (
      <div className="container">
        <div className="headline">
          <h1> Health </h1> <p> The latest and best health articles </p>
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

Health.propTypes = {
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
)(Health)
