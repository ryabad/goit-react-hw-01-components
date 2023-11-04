import Description from './Description';
import Stats from './Stats';
import user from './user.json';
import css from './index.module.css';

const Profile = () => {
  return (
    <div className={css.profile}>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
};

export default Profile;
