import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';
import { TechStack } from '../../components/portfolio';
import POSImg from '../../assets/images/POSsystem.png';

const POSsystem = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - POS System</title>
      <meta
        name="description"
        content="Description of building POS System"
      />
    </Helmet>

    <Hero
      img={POSImg}
      title="POS System"
      content="Give me some time"
      height="450px"
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Tech</h2>
          </header>
          <TechStack
            techs={['reactjs', 'reactnative', 'apollo', 'prisma', 'graphql', 'node', 'github', 'styledComponents']}
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

export default POSsystem;
