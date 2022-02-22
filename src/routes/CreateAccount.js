import React from 'react';
import UserContext from '../Contexts/UserContext';

const CreateAccount = () => {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>
        Create Account <br />
        {JSON.stringify(ctx)}
      </h1>
    </div>
  );
};

export default CreateAccount;
