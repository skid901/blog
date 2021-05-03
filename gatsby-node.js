/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const component = path.resolve(`${__dirname}/src/pages/post.js`);
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (errors) {
    console.error(result.errors);
  }

  data.allMarkdownRemark.edges.forEach(({ node: { frontmatter: { path } } }) =>
    createPage({ component, path }),
  );
};
