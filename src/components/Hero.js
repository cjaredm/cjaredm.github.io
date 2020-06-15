import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Hero = ({ imgUrl, name, content }) => {
  const { defaults } = useStaticQuery(graphql`
    query {
      defaults: strapiDefaults {
        postImage {
          childImageSharp {
            fluid {
              src
              srcSet
            }
          }
        }
      }
    }
  `);

  const img = imgUrl || defaults.postImage.childImageSharp.fluid.src;
  return (
    <Section imgUrl={img} id="banner" className={`major`}>
      <div className="inner">
        <div className="banner-wrapper">
          <div>
            <header className="major">
              <h1>{name}</h1>
            </header>

            <div className="content">{content}</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center center fixed;
  background-size: cover;
  min-height: auto !important;
`;
