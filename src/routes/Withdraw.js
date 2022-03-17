import React from 'react';
import UserContext from '../Contexts/UserContext';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MyCard from '../components/MyCard';

const Withdraw = () => {
  const ctx = React.useContext(UserContext);
  const [currBalance, setCurrBalance] = React.useState(ctx.currentUser.balance);
  const [amount, setAmount] = React.useState(0);

  const makeWithdrawal = (e) => {
    e.preventDefault();
    ctx.users.forEach((user) => {
      if (user.email === ctx.currentUser.email) {
        user.balance = user.balance - amount;
        setCurrBalance(user.balance);
      }
    });

    console.log(ctx);
    console.log(ctx.currentUser.balance);
  };

  console.log('users array:');
  console.log(ctx.users);

  return (
    <MyCard
      txtcolor="light"
      // headerText="dark"
      bgcolor="primary"
      bodybg="dark"
      header="Withdraw"
      title="Enter withdrawal amount"
      // text="You can use this bank at your own risk!"
      body={
        <>
          <h1>Withdraw</h1>
          <Container>
            <h2>Curent Balance: ${currBalance}</h2>
          </Container>
          <Container>
            <Form className="my-3 py-3 width-50 ">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Withdraw</Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Enter withdrawal amount"
                  onChange={(e) => setAmount(e.currentTarget.value)}
                />
                <Form.Text className="text-muted">
                  Enter your withdrawal amount
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={makeWithdrawal}>
                Withdraw
              </Button>
            </Form>
          </Container>
        </>
      }
    />
  );
};

export default Withdraw;
