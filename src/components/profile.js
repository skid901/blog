import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './profile.css';

const Profile = () => {
  const links = [
    [`GitHub`, `https://github.com/skid901`],
    [`Facebook`, `https://www.facebook.com/profile.php?id=100003703962149`],
    [`Notion`, `http://skid901.kro.kr`],
  ];

  return (
    <section className="profile">
      <div className="profile__thumbnail">
        <StaticImage
          src="../images/profile-thumbnail.png"
          width={100}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="profile thumbnail"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="profile__info">
        <div className="profile__description">
          웹 개발자 <span className="profile__nickname">skid901</span>의
          <br />
          개발자로서의 기록 ・ 성장 ・ 나눔을 위한 기술 블로그 입니다.
        </div>
        <ul className="profile__link-list">
          {links.map(([name, link], i) => (
            <li>
              <a href={link} target="blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
