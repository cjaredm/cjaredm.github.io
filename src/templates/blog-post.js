import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { NextPrevPosts } from '../components/NextPrevPosts';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Wrapper>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <HR />

          <NextPrevPosts next={next} previous={previous} />
        </Wrapper>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const Wrapper = styled.div`
  padding: 1em 0 1em 0;
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
  img {
    display: block;
    margin: 0 auto;
  }
`;

const HR = styled.hr`
  border-bottom: solid 1px white;
`;

const Date = styled.p`
  display: block;
  margin: 10px 0 ${rhythm(1)} 0;
`;
