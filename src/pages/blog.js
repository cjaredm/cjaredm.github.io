import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
          {posts.map(({ node }) => {
            console.log(node);
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <PostWrapper key={node.fields.slug}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <header className="major">
                    <h2>{title}</h2>
                  </header>
                </Link>
                <small>{node.frontmatter.date}</small>
                <p>{node.excerpt}</p>
              </PostWrapper>
            );
          })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

const PostWrapper = styled.div`
  padding: 1em 0 1em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);
`;
