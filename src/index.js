import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import getWeb3 from './getWeb3'
import 'babel-polyfill'

class AppMainRouter extends Component {
  constructor(props) {
    super(props)

    getWeb3()
      .then(async web3Config => {
        console.log('Web3: ', web3Config)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

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
