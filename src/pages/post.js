import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Post({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = data;

  return (
    <Layout>
      <Seo title={title} />
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일 HH시 mm분")
        path
      }
    }
  }
`;
