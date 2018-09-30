import React, { Component } from "react"
import { Link } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import PropTypes from "prop-types"
import Spinner from "../layout/spinner"
import classnames from "classnames"
class ClientDetails extends Component {
  state = {
    showBlanceUpdate: false,
    balanceUpdateAmount: "",
  }
  balanceSubmit = e => {
    e.preventDefault()
    const { client, firestore } = this.props
    const { balanceUpdateAmount } = this.state

    const clientUpdate = {
      balance: parseFloat(balanceUpdateAmount),
    }
    firestore.update({ collection: "clients", doc: client.id }, clientUpdate)
  }
  onDeleteClick = () => {
    const { client, firestore, history } = this.props

    firestore
      .delete({ collection: "clients", doc: client.id })
      .then(history.push("/"))
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    const { client } = this.props
    const { showBlanceUpdate, balanceUpdateAmount } = this.state

    let balanceForm = ""
    if (showBlanceUpdate) {
      balanceForm = (
        <form onSubmit={this.balanceSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="balanceUpdateAmount"
              placeholder="Add new balance"
              value={balanceUpdateAmount}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <input
                type="submit"
                value="Update"
                className="btn btn-outline-dark"
              />
            </div>
          </div>
        </form>
      )
    } else {
      balanceForm = null
    }
    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" />
                Back to Dashborad
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                  Edit
                </Link>
                <button className="btn btn-danger" onClick={this.onDeleteClick}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <h3 className="card-header">
              {client.firstName} {client.lastName}
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h4>
                    Client ID:
                    {""} <span className="text-secondary">{client.id}</span>
                  </h4>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3>
                    Balance:{" "}
                    <span
                      className={classnames({
                        "text-danger": client.balance > 0,
                        "text-success": client.balance === 0,
                      })}
                    >
                      ${parseFloat(client.balance).toFixed(2)}
                    </span>
                    <small>
                      <button
                        className="btn"
                        onClick={() => {
                          this.setState({
                            showBlanceUpdate: !this.state.showBlanceUpdate,
                          })
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </button>
                    </small>
                  </h3>
                  {balanceForm}
                </div>
              </div>
              <hr />
              <ul className="list-group">
                <li className="list-group-item">
                  Contact Email: {client.email}
                </li>
                <li className="list-group-item">
                  Contact Phone: {client.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return <Spinner />
    }
  }
}
ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired,
}
export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0],
  }))
)(ClientDetails)
