import css from './index.module.css';

const FriendListItem = props => {
  return props.friends.map(el => (
    <li className={css.item} key={el.id}>
      <span
        className={`${css.status} ${el.isOnline ? css.online : css.offline}`}
      ></span>
      <img
        className={css.avatar}
        src={el.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{el.name}</p>
    </li>
  ));
};

export default FriendListItem;
