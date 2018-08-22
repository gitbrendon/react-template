import './assets/App.css'
import React, { Component } from 'react'
import { Header, Home, About, Footer } from './components'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMobileMenu: false,
      navigationData: [
        {
          icon: 'link-icon-all',
          title: 'Home',
          url: '/',
          class: ''
        },
        {
          icon: 'link-icon-all',
          title: 'About',
          url: '/about',
          class: ''
        }
      ]
    }
  }

  onHomeRender = () => {
    return <Home />
  }

  onAboutRender = () => {
    return <About />
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ showMobileMenu: !prevState.showMobileMenu }))
  }

  getTitle = () => {
    const currentPath = this.props.location.pathname

    if (currentPath === `${this.state.navigationData[1].url}`) {
      return this.state.navigationData[1].title
    } else {
      return this.state.navigationData[0].title
    }
  }

  render() {
    return (
      <section className={`content ${this.state.showMobileMenu ? 'content-menu-open' : ''}`}>
        <Header
          baseRootPath="/"
          navigationData={this.state.navigationData}
          onMenuToggle={this.toggleMobileMenu}
          showMobileMenu={this.state.showMobileMenu}
        />
        <div className={`app-container ${this.state.showMobileMenu ? 'app-container-open-mobile-menu' : ''}`}>
          <div className="container">
            <div className="main-title-container">
              <span className="main-title">{this.getTitle()}</span>
            </div>
          </div>
          <Route exact path="/" render={this.onHomeRender} />
          <Route exact path="/about" render={this.onAboutRender} />
        </div>
        <Footer />
      </section>
    )
  }
}

export default App
