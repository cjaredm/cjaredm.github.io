import React from 'react';
import { ContactIcons } from './ContactIcons';
import styled from 'styled-components';

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ContactIcons />

      <ul className="copyright">
        <li>&copy; cJaredm</li>
        <li>
          GatsbyTheme: <A href="https://html5up.net">HTML5 UP</A>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

const A = styled.a`
  box-shadow: 0 0 0 0;
`;
