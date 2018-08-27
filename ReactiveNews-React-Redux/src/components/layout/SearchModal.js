import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import DatePicker from "react-datepicker"
import { searchNews } from "../../actions/newsActions"

import "react-datepicker/src/stylesheets/datepicker.scss"
class SearchModal extends Component {
  state = {
    input: "",
    dateFrom: "",
    dateTo: "",
  }

  valueInput = e => {
    this.setState({
      input: e.target.value,
    })
  }
  handleChangeDateFrom = date => {
    const valueOfInputFrom = date.format("YYYY-MM-DD")
    this.setState({
      dateFrom: valueOfInputFrom,
    })
  }
  handleChangeDateTo = date => {
    const valueOfInputTo = date.format("YYYY-MM-DD")
    this.setState({
      dateTo: valueOfInputTo,
    })
  }
  searchInput = () => {
    const { input, dateFrom, dateTo } = this.state
    this.props.searchNews(input, dateFrom, dateTo)
    console.log(this.state.dateFrom, this.state.dateTo, this.state.input)
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="col-lg-6 col-sm-12 mx-auto">
              <div className="headline">
                <h1> Search for news </h1>{" "}
                <p> Choose date range which you would like to see </p>{" "}
              </div>
              <form>
                <div class="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Type what you would like to search"
                    onChange={this.valueInput}
                  />
                </div>
                <div class="form-group">
                  <DatePicker
                    placeholderText="Date from"
                    className="form-control"
                    dateFormat="YYYY/MM/DD"
                    onChange={this.handleChangeDateFrom}
                    onSelect={this.handleSelect}
                  />
                  <DatePicker
                    placeholderText="Date to"
                    className="form-control mt-3"
                    dateFormat="YYYY/MM/DD"
                    onChange={this.handleChangeDateTo}
                    onSelect={this.handleSelect}
                  />
                </div>
                <Link to="/results">
                  <button
                    className="btn btn-primary btn-block btn-outline-secondary"
                    onClick={this.searchInput}
                  >
                    Search
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  null,
  { searchNews }
)(SearchModal)
