/* eslint-disable */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

export default function About() {
  const { strapiSiteInfo, post } = useStaticQuery(graphql`
    query {
      strapiSiteInfo {
        about
        email
        siteName
      }
      post: strapiBlogPosts(title: { glob: "How I Got Started" }) {
        title
        route
      }
    }
  `);
  return (
    <div className="inner">
      <header className="major">
        <h2>About Me</h2>
      </header>
      <ReactMarkdown source={strapiSiteInfo.about} />

      <ul className="actions">
        <li>
          <Link to={post.route} className="button next">
            {post.title}
          </Link>
        </li>
      </ul>
    </div>
  );
}
