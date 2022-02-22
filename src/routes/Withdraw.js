import React from 'react';
import UserContext from '../Contexts/UserContext';

const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>Withdraw</h1>
      <h1>{JSON.stringify(ctx)}</h1>
    </div>
  );
};

export default Withdraw;
