import css from './index.module.css';

const Description = props => {
  return (
    <div className={css.description}>
      <img src={props.avatar} alt={props.username} className={css.avatar} />
      <p className={css.name}>{props.username}</p>
      <p className={css.tag}>@{props.tag}</p>
      <p className={css.location}>{props.location}</p>
    </div>
  );
};

export default Description;
