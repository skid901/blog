import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PostLink from '../components/postLink';
import Profile from '../components/profile';

export default function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Layout>
      <Seo title="Home" />
      <Profile />
      <ul style={{ width: '85%', margin: '0 auto' }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink key={node.id} node={node} />
        ))}
      </ul>
    </Layout>
  );
}
