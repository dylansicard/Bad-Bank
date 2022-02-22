import React from 'react';
import UserContext from '../Contexts/UserContext';

const AllData = () => {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h1>
        AllData Page <br />
        {JSON.stringify(ctx)}
      </h1>
    </div>
  );
};

export default AllData;
