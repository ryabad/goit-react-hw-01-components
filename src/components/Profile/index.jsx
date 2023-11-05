import css from './index.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  const keys = Object.keys(stats);

  const list = keys.map(el => (
    <li key={el}>
      <span className={css.label}>{el}</span>
      <span className={css.quantity}>{stats[el]}</span>
    </li>
  ));

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>{list}</ul>
    </div>
  );
};

export default Profile;
