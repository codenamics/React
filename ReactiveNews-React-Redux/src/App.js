import { hot } from "react-hot-loader"
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import Business from "./components/News/Business"
import ESPN from "./components/News/ESPN"
import Entertainment from "./components/News/Entertainment"
import Health from "./components/News/Health"
import Science from "./components/News/Science"
import Tech from "./components/News/Tech"
import SearchModal from "./components/layout/SearchModal"
import Search from "./components/News/Search"
import { Provider } from "react-redux"
import store from "./store"

class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Business business="business" {...props} />}
              />
              <Route
                exact
                path="/business"
                render={props => <Business business="business" {...props} />}
              />
              <Route
                exact
                path="/espn"
                render={props => <ESPN sport="sport" {...props} />}
              />
              <Route
                exact
                path="/entertainment"
                render={props => (
                  <Entertainment entertainment="entertainment" {...props} />
                )}
              />{" "}
              <Route
                exact
                path="/health"
                render={props => <Health health="health" {...props} />}
              />
              <Route
                exact
                path="/science"
                render={props => <Science science="science" {...props} />}
              />
              <Route
                exact
                path="/tech"
                render={props => <Tech technology="technology" {...props} />}
              />
              <Route exact path="/search" component={SearchModal} />
              <Route exact path="/results" component={Search} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
