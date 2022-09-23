import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdViewInAr } from 'react-icons/md'
import './Navbar.css'
import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Logo Aperture" />
      </div>
      <ul className="app__navbar-menu">
        <li className="p__opensans">
          <a href="#BusinessAreas">Business areas</a>
        </li>
        <li className="p__opensans">
          <a href="#FeaturedImages">Featured images</a>
        </li>
        <li className="p__opensans">
          <a href="#GearCage">Gear cage</a>
        </li>
        <li className="p__opensans">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#FFFF"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdViewInAr
              fontSize={27}
              color="#fff"
              onClick={() => setToggleMenu(false)}
              className="overlay__close"
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#BusinessAreas">Business areas</a>
              </li>
              <li className="p__opensans">
                <a href="#FeaturedImages">Featured images</a>
              </li>
              <li className="p__opensans">
                <a href="#GearCage">Gear cage</a>
              </li>
              <li className="p__opensans">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
