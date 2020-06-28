import React from 'react';
import { graphql } from 'gatsby';
import { PostsList } from '../components/page/Blog/post-parts';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function BlogIndex(props) {
  const { data } = props;
  const siteTitle = data?.site?.siteName;
  const posts = data.posts.nodes;
  const defaultImage = data?.defaults?.postImage;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Dev Blog" description="" />
      <h1 className="section-title">{`<Dev Blog />`}</h1>
      <PostsList posts={posts} defaultImage={defaultImage} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site: strapiSiteInfo {
      about
      email
      siteName
    }

    defaults: strapiDefaults {
      postImage {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }

    posts: allStrapiBlogPosts(sort: { order: DESC, fields: created_at }) {
      nodes {
        id
        strapiId
        title
        route
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
