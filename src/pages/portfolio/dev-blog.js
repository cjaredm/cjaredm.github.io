import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/Hero';

const DevBlog = props => (
  <Layout>
    <Helmet>
      <title>cJaredm - Dev Blog</title>
      <meta name="description" content="Description of building my Dev Blog" />
    </Helmet>

    <Hero title="Gatsby Dev Blog" description="This description will be added soon!" />
  </Layout>
);

export default DevBlog;
