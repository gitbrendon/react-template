import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'babel-polyfill'

class AppMainRouter extends Component {
  render() {
    return (
      <Router>
        <Route component={App} />
      </Router>
    )
  }
}

ReactDOM.render(<AppMainRouter />, document.getElementById('root'))
registerServiceWorker()
