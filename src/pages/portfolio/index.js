import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';

import pos from '../../assets/images/portfolio/pos/POSsystem.png';
import movies from '../../assets/images/portfolio/intheaters/movie-clapper.jpg';
import desk from '../../assets/images/simple-desk-computer.jpg';
import myshopanalytics from '../../assets/images/portfolio/myshop/MyShopAnalytics.png';

const Portfolio = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - Portfolio</title>
      <meta
        name="description"
        content="Portfolio of coding projects for cJaredm"
      />
    </Helmet>

    <Hero
      title="Code Portfolio"
      description="This is a short list of the prominent and interesting projects you can browse to learn more about how I code."
    />

    <div id="main">
      <section id="one" className="spotlights">
        <section>
          <Link to="/portfolio/my-shop-analytics" className="image">
            <img src={myshopanalytics} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>MyShopAnalytics.com</h3>
              </header>
              <p>
                Front and backend machine shop order, part and operation tracker
                currently being used daily by Alphaeus Manufacturing LLC
              </p>
              <ul className="actions">
                <li>
                  <Link to="/portfolio/my-shop-analytics" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Link to="/portfolio/pos-system" className="image">
            <img src={pos} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Runway Fashion POS</h3>
              </header>
              <p>
                React Native point of sale system made for iOS to be used with
                clothing resellers. Runway Fashion Exchange is currently working
                with us as our first user.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/portfolio/pos-system" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Link to="/portfolio/in-theaters-soon" className="image">
            <img src={movies} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>In Theaters Soon!</h3>
              </header>
              <p>
                First React Native app used as a tech learning playground.
                Connects to TheMovieDatabase api to show all and only upcoming
                movie trailers. I've refactored this multiple time to test out
                new libraries and tech, like: Redux, Unstated, Firebase, and
                more.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/portfolio/in-theaters-soon" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <Link to="/portfolio/dev-blog" className="image">
            <img src={desk} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Dev Blog</h3>
              </header>
              <p>
                This portfolio site began as my first Gatsby Static Blog. I
                started it on Github Pages and transitioned over to my own
                custom domain using Netlify.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/portfolio/dev-blog" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Portfolio;
