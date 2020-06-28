import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import { ContactIcons } from './ContactIcons';

export default function Footer(props) {
  const { posts, items } = useStaticQuery(graphql`
    query {
      posts: allStrapiBlogPosts(
        limit: 5
        sort: { order: DESC, fields: created_at }
      ) {
        nodes {
          id
          route
          title
        }
      }

      items: allStrapiPortfolioItem(
        filter: { featured: { eq: true } }
        limit: 5
        sort: { order: DESC, fields: created_at }
      ) {
        nodes {
          name
          route
        }
      }
    }
  `);

  return (
    <footer id="footer">
      <div className="inner">
        <div className="footer__wrapper">
          <ContactForm />

          <div className="footer__section-wrapper">
            <nav className="footer__links-sections">
              <div className="footer__links-section">
                <Link to="/blog">
                  <h3>Featured Posts</h3>
                </Link>
                <ul className="footer__links">
                  {posts?.nodes?.map(item => (
                    <li key={item.route}>
                      <Link to={item.route}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer__links-section">
                <Link to="/portfolio">
                  <h3>Featured Portfolio</h3>
                </Link>
                <ul className="footer__links">
                  {items?.nodes?.map(item => (
                    <li key={item.route}>
                      <Link to={item.route}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <ContactIcons className="align-center" />
          </div>
        </div>

        <ul className="copyright">
          <li>&copy; cJaredm</li>
          <li>
            GatsbyTheme: Modified <A href="https://html5up.net">HTML5 UP</A>
          </li>
        </ul>
      </div>
    </footer>
  );
}

const A = styled.a`
  box-shadow: none;
`;
