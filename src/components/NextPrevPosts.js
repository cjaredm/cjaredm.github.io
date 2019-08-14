import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export function NextPrevPosts({ previous, next }) {
  return (
    <PrevNextWrapper>
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </PrevNextWrapper>
  );
}

const PrevNextWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;
