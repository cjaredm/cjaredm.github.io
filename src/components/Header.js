/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Header(props) {
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <strong>cJaredm</strong> <span>Frontend Developer</span>
      </Link>

      <nav>
        <a className="menu-link" onClick={props.onToggleMenu}>
          Menu
        </a>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};
