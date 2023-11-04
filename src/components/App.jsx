import FriendList from './FriendList';
import Profile from './Profile';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload Stats" />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
