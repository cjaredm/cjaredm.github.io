const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      query PageData {
        posts: allStrapiBlogPosts {
          edges {
            node {
              route
            }
          }
        }
        portfolioItems: allStrapiPortfolioItem {
          edges {
            node {
              route
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.posts.edges;
  posts.forEach(post => {
    createPage({
      path: post.node.route,
      component: require.resolve('./src/templates/blog-post.js'),
      context: {
        route: post.node.route,
      },
    });
  });
  // Create blog posts pages.
  const portfolioItems = result.data.portfolioItems.edges;
  portfolioItems.forEach(item => {
    createPage({
      path: item.node.route,
      component: require.resolve('./src/templates/portfolio-item.js'),
      context: {
        route: item.node.route,
      },
    });
  });
};
