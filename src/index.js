import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App from './App.js';
import Sidebar from './Sidebar.js'
import LeftCard from './LeftCard.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LeftCard />
    <Sidebar />
    <Sidebar
      name="Google Home"
      description="All you can Eat"
      price={59.99}
    />
  </React.StrictMode>
);

