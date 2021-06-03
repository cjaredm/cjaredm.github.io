import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

export default function FeaturedPortfolioItems() {
  const { items, defaults } = useStaticQuery(graphql`
    query PORTFOLIO_ITEMS {
      defaults: strapiDefaults {
        postImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      items: allStrapiPortfolioItem(filter: { featured: { eq: true } }) {
        nodes {
          name
          route
          cardText
          screenshot {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  if (!items?.nodes.length) return null;
  return (
    <section id="featured-portfolio-items" className="tiles">
      {items?.nodes?.map((item, i) => {
        const img =
          item?.screenshot?.childImageSharp?.fluid?.src ||
          // item?.screenshot?.publicURL ||
          defaults?.postImage?.childImageSharp?.fluid?.src;

        return (
          <article
            key={i + item?.name}
            style={{ backgroundImage: `url(${img})` }}
          >
            <Link to={item.route} className="tile__link">
              <header className="major">
                <h3>{item.name}</h3>
              </header>
              <ReactMarkdown source={item.cardText} className="tile__content" />
            </Link>
          </article>
        );
      })}
    </section>
  );
}
