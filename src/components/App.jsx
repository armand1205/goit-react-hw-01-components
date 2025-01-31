import React from 'react';
//
import Profile from './profile/Profile';
import user from './data/user.json';
//
import Statistics from './statistics/Statistics';
import data from './data/data.json';
//
import FriendsList from './friendsList/FriendsList';
import friends from './data/friends.json';
//
import TransactionsHistory from './transactions/TransactionsHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: 'lightgrey',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </div>
  );
};
