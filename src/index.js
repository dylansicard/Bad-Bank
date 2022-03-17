import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

// routes
import App from './components/App';
import Home from './routes/Home';
import AllData from './routes/AllData';
import Balance from './routes/Balance';
import CreateAccount from './routes/CreateAccount';
import Deposit from './routes/Deposit';
import Login from './routes/Login';
import Withdraw from './routes/Withdraw';
import NoPath from './routes/NoPath';

// context
import UserContext from './Contexts/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const val = {
  users: [],
  currentUser: {},
};

// routes are all defined below, then used throughout app with Links
// context wrapped around routes to provide context to entire app
ReactDOM.render(
  <BrowserRouter>
    <UserContext.Provider value={val}>
      <Routes>
        <Route path="/" element={<App />}>
          {/* the index prop chooses which route loads by default, ie the default child of the parent component. default child route for a parent route */}
          <Route index element={<Home />} />
          <Route path="AllData" element={<AllData />} />
          <Route path="Balance" element={<Balance />} />
          <Route path="CreateAccount" element={<CreateAccount />} />
          <Route path="Deposit" element={<Deposit />} />
          <Route path="Login" element={<Login />} />
          <Route path="Withdraw" element={<Withdraw />} />

          <Route path="*" element={<NoPath />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
