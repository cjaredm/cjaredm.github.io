import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { PostsList } from '../Blog/post-parts';

export default function FeaturedBlogPosts({ posts = [], defaultImage }) {
  return (
    <Section>
      <Link to="/blog" className="align-center">
        <h2 className="section-title">Recent Blog Posts</h2>
      </Link>

      {posts.length && <PostsList posts={posts} defaultImage={defaultImage} />}
    </Section>
  );
}

const Section = styled.div`
  padding: 20px 20px 40px;
`;
