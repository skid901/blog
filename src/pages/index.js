import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

export default function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              frontmatter {
                path
                title
                date(formatString: "YYYY년 MM월 DD일 HH시 mm분")
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
      <p>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { path, title, date },
            },
          }) => (
            <>
              <Link to={path}>
                <span style={{ fontSize: '20px' }}>{title}</span>
              </Link>
              {` - ${date}`}
              <br />
            </>
          ),
        )}
      </p>
    </Layout>
  );
}
