import React, { Component } from "react"
import PropTypes from "prop-types"
import "./NewsGrid.scss"
export default class Grid extends Component {
  render() {
    const {
      title,
      author,
      description,
      url,
      urlToImage,
      source,
    } = this.props.el
    return (
      <div className="grid__item">
        <a href={url}>
          <div
            className="grid__item-top"
            style={{
              backgroundImage: `url(${urlToImage})`,
            }}
          >
            {" "}
            <div className="title"> {source.name} </div>{" "}
            <div className="author"> {author} </div>{" "}
          </div>{" "}
          <div className="grid__item-bottom">
            <h1> {title} </h1> <p> {description} </p>{" "}
          </div>{" "}
        </a>
      </div>
    )
  }
}
Grid.propTypes = {
  el: PropTypes.object.isRequired,
}
