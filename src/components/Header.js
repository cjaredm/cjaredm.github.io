/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ContactIcons } from './ContactIcons'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>cJaredm</strong> <span>Frontend Developer</span>
    </Link>

    <ContactIcons />

    <nav>
      <a className="menu-link" onClick={props.onToggleMenu}>
        Menu
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
