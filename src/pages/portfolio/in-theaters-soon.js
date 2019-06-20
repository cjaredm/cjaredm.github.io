import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';

const InTheatersSoon = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - InTheatersSoon</title>
      <meta name="description" content="Description of building InTheatersSoon" />
    </Helmet>

    <Hero title="In Theaters Soon" description="This description will be added soon!" />
  </Layout>
);

export default InTheatersSoon;
