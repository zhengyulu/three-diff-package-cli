import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import './i18n';

function App() {
  // init
  return (
    <Router />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
