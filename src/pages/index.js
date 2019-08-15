/* eslint-disable */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import { PostExcerpt } from './blog';

import hero from '../assets/images/backend-frontend.jpg';
import MyShopImg from '../assets/images/MyShopAnalytics.png';
import POSImg from '../assets/images/POSsystem.png';
import movieClapper from '../assets/images/movie-clapper.jpg';
import genericDeskImg from '../assets/images/simple-desk-computer.jpg';

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Helmet
          title="cJaredm - Frontend Dev"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner img={hero} />

        <div>
          <Link to="/blog">
            <h2 className="section-title">Recent Blog Posts</h2>
          </Link>
          {data && (
            <div className="recent-posts">
              <PostExcerpt node={data.allMarkdownRemark.edges[0].node} />
              <PostExcerpt node={data.allMarkdownRemark.edges[1].node} />
              <PostExcerpt node={data.allMarkdownRemark.edges[2].node} />
            </div>
          )}
        </div>

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${MyShopImg})` }}>
              <header className="major">
                <h3>MyShopAnalytics.com</h3>
                <p>
                  Front and backend machine shop order, part and operation
                  tracker.
                  <br />
                  Currently being used daily by Alphaeus Manufacturing LLC
                </p>
              </header>
              <Link to="portfolio/my-shop-analytics" className="link primary" />
            </article>

            <article style={{ backgroundImage: `url(${POSImg})` }}>
              <header className="major">
                <h3>Runway Fashion POS</h3>
                <p>
                  React Native point of sale system made for iOS to be used with
                  clothing resellers. Runway Fashion Exchange is currently
                  working with us as our first user.
                </p>
              </header>
              <Link to="/portfolio/pos-system" className="link primary" />
            </article>

            <article style={{ backgroundImage: `url(${movieClapper})` }}>
              <header className="major">
                <h3>In Theaters Soon!</h3>
                <p>
                  First React Native app used to learn RN. Connects to
                  TheMovieDatabase api to show all and only upcoming movie
                  trailers.
                </p>
              </header>
              <Link to="/portfolio/in-theaters-soon" className="link primary" />
            </article>

            <article style={{ backgroundImage: `url(${genericDeskImg})` }}>
              <header className="major">
                <h3>Dev Blog</h3>
                <p>
                  This portfolio site began as my first Gatsby Static Blog. I
                  started it on Github Pages and transitioned over to my own
                  custom domain using Netlify.
                </p>
              </header>
              <Link to="/portfolio/dev-blog" className="link primary" />
            </article>
          </section>

          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                Thanks for visiting! Don't be a stranger, feel free to reach out and say hello!
                <br/>
                <strong>cjaredm@protonmail.com</strong>
              </p>
              <p>
                I am someone who takes things apart to see how each part works.
                I am a life-time learner with a Bachelor's degree in Philosophy
                and a Master's degree of Eduction in Instructional Design. I
                strive to learn how things work while also focusing on
                functionality and getting work done.
              </p>
              <p>
                My passion is to create value in the world. I am rewarded when I
                see my work being used, appreciated and built upon. I one day
                wish to own my own SaaS company that provides tools for small
                businesses. I dream to hire and train young adults in software
                development and mentor others seeking the same rewarding career
                I already have.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    to="/2019-04-24-how-i-got-started/"
                    className="button next"
                  >
                    My Dev Story
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
export default HomeIndex;
