/* eslint-disable */
import React from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import { FeaturedBlogPosts } from '../components/FeaturedBlogPosts';
import FeaturedPortfolioItems from '../components/FeaturedPortfolioItems';
import About from '../components/About';
import hero from '../assets/images/backend-frontend.jpg';

export default function Home(props) {
  const { data } = props;
  return (
    <Layout>
      <SEO title="cjaredm - Frontend Developer" description="" />
      <Banner img={hero} />

      <FeaturedBlogPosts
        posts={data?.posts?.nodes}
        defaultImage={data?.defaults?.postImage}
      />

      <div id="main">
        <FeaturedPortfolioItems />

        <section id="two">
          <About />
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    strapiSiteInfo {
      about
      email
      siteName
    }

    defaults: strapiDefaults {
      postImage {
        childImageSharp {
          fluid {
            src
            srcSet
          }
        }
      }
    }

    posts: allStrapiBlogPosts(
      limit: 3
      sort: { order: DESC, fields: created_at }
      filter: { published: { eq: true } }
    ) {
      nodes {
        id
        strapiId
        route
        title
        synopsis
        date(formatString: "MMMM DD, yyyy")
        image {
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
    }
  }
`;
