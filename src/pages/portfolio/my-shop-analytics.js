import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';
import { TechStack } from '../../components/portfolio';
import myshop from '../../assets/images/MyShopAnalytics.png';

const MyShopAnalytics = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - MyShopAnalytics</title>
      <meta
        name="description"
        content="Description of building MyShopAnalytics"
      />
    </Helmet>

    <Hero
      img={myshop}
      title="MyShopAnalytics.com"
      content="A friend runs a machine shop and wanted something to track his orders, parts and operations run on his machines. I thought, 'I can do that!'"
      height="450px"
    />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Tech</h2>
          </header>
          <CodeLinks>
            <a href="https://github.com/cjaredm/myshop-frontend">
              {'<FrontendCode />'}
            </a>
            <a href="https://github.com/cjaredm/myshop-backend">
              {'<BackendCode />'}
            </a>
          </CodeLinks>
          <TechStack
            techs={[
              'nextjs',
              'reactjs',
              'apollo',
              'prisma',
              'graphql',
              'node',
              'netlify',
              'github',
              'styledComponents',
            ]}
          />

          <header className="major">
            <h2>Screenshots</h2>
          </header>
          <p>I'll get to this soon.</p>

          <header className="major">
            <h2>Why?</h2>
          </header>
          <p>I'll get to this soon.</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default MyShopAnalytics;

const CodeLinks = styled.div`
  display: flex;
  justify-content: center;

  a:first-child {
    margin-right: 20px;
  }
`;
