import React from 'react'
import moment from 'moment'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-rights">Footer goes here. {moment().format('YYYY')}</p>
      </div>
    </footer>
  )
}
