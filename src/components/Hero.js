import React from 'react';
import styled from 'styled-components';

const Hero = ({ img, title, content, height, className}) => (
  <Section img={img} id="banner" className={`major ${className}`} height={height}>
    <div className="inner">
      <div className="banner-wrapper">
        <div>
          <header className="major">
            <h1>{title}</h1>
          </header>

          <div className="content">
            {content}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;

const Section = styled.section`
  background: url(${({img}) => img}) no-repeat center center fixed;
  background-size: cover;
  min-height: ${({height}) => height ? height : 'auto'} !important;
`;
