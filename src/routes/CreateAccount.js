import React, { useState } from 'react';
import UserContext from '../Contexts/UserContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MyCard from '../components/MyCard';

const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ctx = React.useContext(UserContext);

  const validate = (field, label) => {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 1500);
      return false;
    }
    return true;
  };

  // ensure that all fields at least have something entered, add user to User context
  const handleCreate = () => {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(name, 'name')) return;
    if (!validate(name, 'name')) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  };

  // reset form after submit
  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  };

  return (
    <div>
      {/* <h1>
        Create Account <br />
        {JSON.stringify(ctx)}
      </h1> */}
      <MyCard
        bgcolor="primary"
        header="Create Account"
        status={status}
        bodybg="dark"
        body={
          show ? (
            <Form className="my-3 py-3">
              {/* name */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Form.Group>

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
              <Button variant="primary" type="submit" onClick={handleCreate}>
                Create Account
              </Button>
            </Form>
          ) : (
            <div>
              <h5>Success</h5>
              <Button type="submit" onClick={clearForm}>
                Add another account
              </Button>
            </div>
          )
        }
      />
    </div>
  );
};

export default CreateAccount;
