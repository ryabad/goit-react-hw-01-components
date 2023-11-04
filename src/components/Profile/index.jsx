import Stats from './Stats';
import css from './index.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
};

export default Profile;
