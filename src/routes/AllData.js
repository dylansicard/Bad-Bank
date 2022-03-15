import React from 'react';
import UserContext from '../Contexts/UserContext';
import MyCard from '../components/MyCard';
import Table from 'react-bootstrap/Table';

const AllData = () => {
  const ctx = React.useContext(UserContext);
  const [context, setContext] = React.useState(ctx.users);

  // card body -- bootstrap table rendering context data into table data
  const ctxTable = (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* render list of users into table */}
          {context.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );

  return (
    <MyCard
      txtcolor="black"
      bodybg="primary"
      txtcolor="white"
      header="BadBank User Data"
      title="A list of all data within the bank"
      text="I really hope you didn't like... use your real password!"
      body={ctxTable}
    />
  );
};

export default AllData;
