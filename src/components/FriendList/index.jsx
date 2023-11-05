import FriendListItem from './FriendListItem';
import css from './index.module.css';

const FriendList = props => {
  const listFriends = props.friends.map(el => (
    <FriendListItem
      avatar={el.avatar}
      name={el.name}
      isOnline={el.isOnline}
      key={el.id}
    />
  ));

  return <ul className={css.friend_list}>{listFriends}</ul>;
};

export default FriendList;
