import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "../node_modules/react-router-dom/index";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
