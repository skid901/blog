import React from 'react';
import { Link } from 'gatsby';

import './postLink.css';

const PostLink = ({
  node: {
    frontmatter: { path, title, date },
  },
}) => (
  <li className="post-link">
    <Link className="post-link__wrapper" to={path}>
      <div className="post-link__title">{title}</div>
      <div className="post-link__date">{date}</div>
    </Link>
  </li>
);

export default PostLink;
