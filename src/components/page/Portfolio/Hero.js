import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

export default function Hero({ imgUrl, name, content }) {
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
}

const Section = styled.section`
  background: url(${({ imgUrl }) => imgUrl}) no-repeat center center fixed;
  background-size: cover;
  min-height: auto !important;
`;
