import css from './index.module.css';
import List from './List';

const Statistics = props => {
  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}
      <List stats={props.stats} />
    </section>
  );
};

export default Statistics;
