import React from 'react';
import UserContext from '../Contexts/UserContext';

const Balance = () => {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>Balance</h1>
      <h1>{JSON.stringify(ctx)}</h1>
    </div>
  );
};

export default Balance;
