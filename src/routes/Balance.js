import React from 'react';
import UserContext from '../Contexts/UserContext';
import MyCard from '../components/MyCard';

const Balance = () => {
  const ctx = React.useContext(UserContext);
  // return (
  //   <div>
  //     <h1>Balance</h1>
  //     <h1>{JSON.stringify(ctx)}</h1>
  //   </div>
  // );
  console.log(ctx);
  return (
    <MyCard
      txtcolor="black"
      bodybg="primary"
      header="Balance"
      title="Your current balance"
      // text="You can use this bank at your own risk!"
      body={
        <>
          <h1>Balance</h1>
          <h2>Curent Balance: ${ctx.currentUser.balance}</h2>
        </>
      }
    />
  );
};

export default Balance;
