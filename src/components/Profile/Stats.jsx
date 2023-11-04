import css from './index.module.css';

const Stats = props => {
  const keys = Object.keys(props.stats);

  const list = keys.map(el => {
    return (
      <li key={el}>
        <span className={css.label}>{el}</span>
        <span className={css.quantity}>{props.stats[el]}</span>
      </li>
    );
  });

  return <ul className={css.stats}>{list}</ul>;
};

export default Stats;
