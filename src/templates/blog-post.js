import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
// import { NextPrevPosts } from '../components/NextPrevPosts';

function BlogPostTemplate(props) {
  const { post, site } = props?.data;
  // const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location} title={site.siteName}>
      <Wrapper>
        <SEO title={post.title} description={post.synopsis} />
        <h1>{post.title}</h1>
        <Date>{post.date}</Date>

        <ReactMarkdown source={post.content} />

        <HR />

        {/* <NextPrevPosts next={next} previous={previous} /> */}
      </Wrapper>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($route: String!) {
    site: strapiSiteInfo {
      about
      email
      siteName
    }

    post: strapiBlogPosts(route: { eq: $route }) {
      id
      strapiId
      date(formatString: "MMMM DD, yyyy")
      title
      synopsis
      content
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
