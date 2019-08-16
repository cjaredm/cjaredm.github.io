import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';
import { TechStack } from '../../components/TechStack';
import movieClapper from '../../assets/images/movie-clapper.jpg';

const InTheatersSoon = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - InTheatersSoon</title>
      <meta
        name="description"
        content="Description of building InTheatersSoon app"
      />
    </Helmet>

    <Hero
      img={movieClapper}
      title="InTheatersSoon"
      content="Give me some time"
      height="450px"
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Tech</h2>
          </header>
          <center><a href="https://github.com/cjaredm/InTheatersSoon">See the code!</a></center>
          <TechStack
            techs={['reactjs', 'reactnative', 'github']}
          />

          <header className="major">
            <h2>Screenshots</h2>
          </header>
          <p>
            I'll get to this soon.
          </p>

          <header className="major">
            <h2>Why?</h2>
          </header>
          <p>
            I'll get to this soon.
          </p>

        </div>
      </section>
    </div>
  </Layout>
);

export default InTheatersSoon;
