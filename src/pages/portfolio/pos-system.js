import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';

const POSSystem = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - POS System</title>
      <meta name="description" content="Description of building POS System" />
    </Helmet>

    <Hero title="POS System" description="This description will be added soon!" />
  </Layout>
);

export default POSSystem;
