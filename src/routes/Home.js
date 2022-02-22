import React from 'react';
import UserContext from '../Contexts/UserContext';
import MyCard from '../components/MyCard';
import bank from '../img/bank.png';

// const Home = () => {
//   const ctx = React.useContext(UserContext);
//   return (
//     <div>
//       <h1>
//         Home <br />
//         {JSON.stringify(ctx)}
//       </h1>
//     </div>
//   );
// };

const Home = () => {
  return (
    <MyCard
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the bank"
      text="You can use this bank at your own risk!"
      body={<img src={bank} className="img-fluid" alt="bank image" />}
    />
  );
};

export default Home;
