import React from 'react';

const Hero = ({ title, description }) => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
      </header>
      <div className="content">{description}</div>
    </div>
  </section>
);

export default Hero;
