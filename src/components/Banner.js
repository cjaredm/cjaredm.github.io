import React from 'react'
import { ContactIcons } from './ContactIcons'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>I'm Jared, a Frontend Developer</h1>
      </header>
      <div className="content">
        <div>
          <p>
            I focus on elegant, clean and efficient code, blah blah...
            <br />
            I really focus on functionality, learning and getting things done.
          </p>
          <ContactIcons />
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
  </section>
)

export default Banner
