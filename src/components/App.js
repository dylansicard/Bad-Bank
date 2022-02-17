import React from 'react';
import MyNav from './MyNav';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <MyNav />
      {/* allow components to render as children of app route */}
      <Outlet />
    </div>
  );
};

export default App;
