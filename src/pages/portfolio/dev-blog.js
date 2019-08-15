import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';
import genericDeskImg from '../../assets/images/simple-desk-computer.jpg';
import { TechStack } from '../../components/portfolio';

const DevBlog = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - Dev Blog</title>
      <meta name="description" content="Description of building my Dev Blog" />
    </Helmet>

    <Hero
      img={genericDeskImg}
      title="Gatsby Dev Blog"
      content="Hey! You know what this is. It's this. This here. You're looking at it right now."
      height="450px"
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Tech</h2>
          </header>
          <center><a href="https://github.com/cjaredm/cjaredm.github.io">See the code!</a></center>
          <TechStack
            techs={[
              'gatsbyjs',
              'reactjs',
              'apollo',
              'graphql',
              'netlify',
              'github',
              'styledComponents',
            ]}
          />

          <header className="major">
            <h2>Why?</h2>
          </header>
          <p>
            I heard how GatsbyJS was <i>crazy fast</i> and amazing so I had to
            give it a try. It was <strong>CRAZY FAST</strong>. I started to
            throw some blog posts up here and there as a few friends and people
            I mentor asked me questions.
          </p>
          <p>
            At some point we started hiring at work where I saw a lot of
            resume's and dev portfolio websites. I realized: <br />
            <i>> Dang! I need to make something better than these.</i>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default DevBlog;
