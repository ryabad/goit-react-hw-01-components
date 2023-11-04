import FriendListItem from './FriendListItem';
import data from './friends.json';
import css from './index.module.css';

const FriendList = () => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={data} />
    </ul>
  );
};

export default FriendList;
