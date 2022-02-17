import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App';
import Contact from './routes/Contact';
import About from './routes/About';
import Home from './routes/Home';
import NoPath from './routes/NoPath';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NoPath />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
