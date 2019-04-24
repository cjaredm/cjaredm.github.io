import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default function Template({data}) {
  console.log(data);
  const {markdownRemark: post} = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </div>
  );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
        }
      }
    }
  `
;
