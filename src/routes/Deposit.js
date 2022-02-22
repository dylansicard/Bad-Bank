import React from 'react';
import UserContext from '../Contexts/UserContext';

const Deposit = () => {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>
        Deposit
        {JSON.stringify(ctx)}
      </h1>
    </div>
  );
};

export default Deposit;
