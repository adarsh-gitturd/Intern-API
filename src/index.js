import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import US from './headlines/US';
import BBC from './headlines/BBC';
import Germany from './headlines/Germany';
import Trump from './headlines/Trump';

import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/us",
    element: <US />
  },
  {
    path: "/bbc",
    element: <BBC />
  },
  {
    path: "/germany",
    element: <Germany />
  },
  {
    path: "/trump",
    element: <Trump />
  }
]);


root.render(
    // <App />
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
