import React from 'react'
import menuIcon from '../assets/images/icons/icon-menu.svg'
import menuOpenIcon from '../assets/images/icons/icon-close.svg'
import logoImage from '../assets/images/logos/placeholder-logo.png'
import NavigationLinks from './NavigationLinks.jsx'
import MobileMenuLinks from './MobileMenuLinks.jsx'

export const Header = ({ baseRootPath, navigationData, showMobileMenu, onMenuToggle }) => {
  return (
    <header className="header">
      {showMobileMenu && (
        <div className="header-mobile-menu-container">
          {<MobileMenuLinks onMenuToggle={onMenuToggle} navigationData={navigationData} />}
        </div>
      )}
      <div className="container">
        <a className="header-logo-a" href={baseRootPath}>
          <img className="header-logo" src={logoImage} alt="" />
        </a>
        <div className="links-container">
          <NavigationLinks navigationData={navigationData} />
        </div>
        <div className="mobile-menu">
          <img
            alt=""
            className={showMobileMenu ? 'mobile-menu-open-icon' : 'mobile-menu-icon'}
            onClick={onMenuToggle}
            src={showMobileMenu ? menuOpenIcon : menuIcon}
          />
        </div>
      </div>
    </header>
  )
}
