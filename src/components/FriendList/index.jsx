import FriendListItem from './FriendListItem';
import css from './index.module.css';

const FriendList = props => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={props.friends} />
    </ul>
  );
};

export default FriendList;
