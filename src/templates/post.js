import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Profile from '../components/profile';

import './post.css';

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
      <div className="post">
        <h1 className="post__title">{title}</h1>
        <h2 className="post__date">{date}</h2>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Profile />
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
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`;
