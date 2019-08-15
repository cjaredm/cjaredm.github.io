import React from 'react';
import { ContactIcons } from './ContactIcons';
import profile from '../assets/images/profile.jpeg';
import styled from 'styled-components'

const Banner = props => (
  <Section img={props.img} id="banner" className="major">
    <div className="inner">
      <div className="banner-wrapper">
        <div className="profile-wrapper">
          <img className="profile-picture" src={profile} alt="profile picture" />
        </div>

        <div>
          <header className="major">
            <h1>I'm Jared, a Frontend Developer</h1>
          </header>

          <div className="content">
            <div>
              <p>
                <strike>
                  I focus on elegant, clean and efficient code, blah blah...
                </strike>
                <br />
                Let's cut the BS. I balance functionality, learning and getting
                things done.
              </p>
              <ContactIcons className="reset" />
            </div>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  View My Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Banner;

const Section = styled.section`
  background: url(${({img}) => img}) no-repeat center center fixed;
  background-size: cover;
`;
