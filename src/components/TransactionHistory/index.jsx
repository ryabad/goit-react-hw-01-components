import data from './transactions.json';
import css from './index.module.css';
import Transaction from './Transaction';

const TransactionHistory = () => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction items={data} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
