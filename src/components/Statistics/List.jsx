import css from './index.module.css';
import getRandomHexColor from 'common/getColor';

const List = props => {
  const data = props.stats;

  const list = data.map(el => {
    const color = getRandomHexColor();
    return (
      <li className={css.item} key={el.id} style={{ backgroundColor: color }}>
        <span className={css.label}>{el.label}</span>
        <span className={css.percentage}>{el.percentage}%</span>
      </li>
    );
  });

  return <ul className={css.list}>{list}</ul>;
};

export default List;
