import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

function BlogIndex(props) {
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

export default BlogIndex;

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

export function PostsList({ posts = [], defaultImage }) {
  return posts.length ? (
    <PostListWrapper>
      {posts.map(post => {
        return (
          <li key={post.route + post.strapiId}>
            <PostSynopsis post={post} defaultImage={defaultImage} />
          </li>
        );
      })}
    </PostListWrapper>
  ) : null;
}

const PostListWrapper = styled.ul`
  max-width: 1140px;
  margin: 0 auto 50px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media (min-width: 756px) {
    grid-gap: 40px;
  }

  li {
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }
`;

export function PostSynopsis({ post, defaultImage }) {
  const srcSet = post?.image?.childImageSharp?.fluid?.srcSet;
  const defaultSrcSet = defaultImage?.childImageSharp?.fluid?.srcSet;
  return (
    <Link to={post.route} key={post.strapiId}>
      <PostCardWrapper>
        <img
          className="post-car__img"
          src=""
          srcSet={srcSet || defaultSrcSet}
          alt=""
        />
        <Header className="major">
          <h2>{post.title}</h2>
        </Header>
        <time>{post.date}</time>
        <p>{post.synopsis}</p>
      </PostCardWrapper>
    </Link>
  );
}

const Header = styled.header`
  margin-bottom: 0 !important;
`;

const PostCardWrapper = styled.div`
  width: auto;
  height: 100%;
  flex: 1;
  border-radius: 5px;
  margin: 0 20px 20px;
  padding: 20px;
  transition: transform 500ms;

  @media (min-width: 756px) {
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 3px 6px black;
  }

  .post-car__img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }

  time {
    font-size: 14px;
  }
`;
