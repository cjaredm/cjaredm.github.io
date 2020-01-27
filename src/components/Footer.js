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

      <form action="https://formspree.io/xyyerdyg" method="POST">
        <h4>Have a question? Send me a message.</h4>
        <div className="col-6">
          <div className="mb-5">
            <input
              type="email"
              name="_replyto"
              id="_replyto"
              defaultValue=""
              placeholder="Email*"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-5">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message*"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </div>
      </form>
    </div>
  </footer>
);

export default Footer;

const A = styled.a`
  box-shadow: 0 0 0 0;
`;
