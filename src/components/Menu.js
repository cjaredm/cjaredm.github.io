/* eslint-disable */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function Menu(props) {
  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link onClick={props.onToggleMenu} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={props.onToggleMenu} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <a className="close" onClick={props.onToggleMenu}>
        Close
      </a>
    </nav>
  );
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};
