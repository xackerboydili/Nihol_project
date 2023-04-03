import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './hooks/wrappers';
import './index.css';
// import Login from './components/Login';
import Navbar from './components/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Wrapper>
  <Navbar />
</Wrapper>);



