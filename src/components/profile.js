import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'React';

import './profile.css'

const Profile = () => (
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
          개발자로서의 성장과 나눔을 위한 기술 블로그 입니다.
        </div>
        <ul className="profile__link-list">
          <li><a href="https://github.com/skid901" target="blank">GitHub</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100003703962149" target="blank">Facebook</a></li>
          <li><a href="http://skid901.kro.kr" target="blank">Notion</a></li>
        </ul>
      </div>
  </section>
)

export default Profile;
