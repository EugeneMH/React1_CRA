import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

// const elem = (
//   <div>
//       <h2>Hello World</h2>
//       <input type='text'/>
//       <button>Click</button>
//   </div>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
