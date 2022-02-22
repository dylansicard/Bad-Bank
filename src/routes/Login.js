import React from 'react';
import UserContext from '../Contexts/UserContext';

const Login = () => {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>
        Login Page
        {JSON.stringify(ctx)}
      </h1>
    </div>
  );
};

export default Login;
