import React, { useState } from 'react';
import UserContext from '../Contexts/UserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import MyCard from '../components/MyCard';

// todo:
// don't show login page if logged in

const Login = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ctx = React.useContext(UserContext);

  // disable submit if no email/password entered
  const enableSubmit = (email, password) => {
    if (email.length && password.length) {
      return false;
    }
    return true;
  };

  // simple check if email and password is listed
  const authenticateLogin = (e) => {
    e.preventDefault();
    console.log(email, password);

    const currUser = ctx.users.filter((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }
    });

    if (currUser.length) {
      ctx.currentUser = currUser[0];
      setShow(false);
    } else {
      setStatus('Login failed. Please try again');
      setTimeout(() => setStatus(''), 3500);
    }
  };

  return (
    <div>
      <MyCard
        bgcolor="primary"
        header="Login"
        status={status}
        bodybg="dark"
        body={
          // ternary expression determining whether to show create user form or account creation success message
          show ? (
            <Form className="my-3 py-3">
              {/* email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              {/* password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={authenticateLogin}
                disabled={enableSubmit(email, password)}
              >
                Sign In
              </Button>
            </Form>
          ) : (
            <div>
              <h5>Login Success</h5>
              <Button variant="light" type="button" className="m-2">
                <LinkContainer to="/Deposit">
                  <Nav.Link>Deposit</Nav.Link>
                </LinkContainer>
              </Button>
              <Button variant="light" type="button" className="m-2">
                <LinkContainer to="/Withdraw">
                  <Nav.Link>Withdraw</Nav.Link>
                </LinkContainer>
              </Button>
            </div>
          )
        }
      />
    </div>
  );
};

export default Login;
