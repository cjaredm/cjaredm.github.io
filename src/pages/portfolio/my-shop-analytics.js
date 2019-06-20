import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';

const MyShopAnalytics = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - MyShopAnalytics</title>
      <meta name="description" content="Description of building MyShopAnalytics" />
    </Helmet>

    <Hero title="MyShopAnalytics.com" description="This description will be added soon!" />
  </Layout>
);

export default MyShopAnalytics;
