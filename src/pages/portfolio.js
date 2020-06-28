import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/page/Portfolio/Hero';

export default function Portfolio(props) {
  const { data } = props;
  return (
    <Layout>
      <SEO
        title="cjaredm - Portfolio"
        description="Portfolio of coding projects for cJaredm"
      />

      <Hero
        name="Code Portfolio"
        content="This is a short list of the prominent and interesting projects you can browse to learn more about how I code."
      />

      <div id="main">
        <section id="one" className="spotlights">
          {data?.items?.nodes?.map((itemProps, i) => (
            <PortfolioSection
              key={itemProps.name}
              {...itemProps}
              defaultSrcSet={
                data?.defaults?.postImage?.childImageSharp?.fluid?.srcSet
              }
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

function PortfolioSection({ route, name, cardText, screenshot, ...props }) {
  const { defaultSrcSet } = props;
  // const imageSrcSet = img?.childImageSharp?.fluid?.srcSet;
  const imgSrcSet = screenshot?.childImageSharp?.fluid?.srcSet;

  return (
    <section>
      <div className="portfolio-section__img-wrapper">
        <Link to={route}>
          <img
            className="image"
            src=""
            srcSet={imgSrcSet ? imgSrcSet : defaultSrcSet}
            alt=""
          />
        </Link>
      </div>
      <div className="content">
        <div className="inner">
          <header className="major">
            <h3>{name}</h3>
          </header>
          <p>{cardText}</p>
          <ul className="actions">
            <li>
              <Link to={route} className="button">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export const pageQuery = graphql`
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
    items: allStrapiPortfolioItem {
      nodes {
        name
        route
        cardText
        screenshot {
          name
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
    }
  }
`;
