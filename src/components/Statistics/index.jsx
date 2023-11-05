import css from './index.module.css';
import getRandomHexColor from 'common/getColor';

const Statistics = props => {
  const list = props.stats.map(el => {
    const color = getRandomHexColor();
    return (
      <li className={css.item} key={el.id} style={{ backgroundColor: color }}>
        <span className={css.label}>{el.label}</span>
        <span className={css.percentage}>{el.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}
      <ul className={css.list}>{list}</ul>
    </section>
  );
};

export default Statistics;
