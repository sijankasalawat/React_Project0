import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Rating from './Fiber_Star/Dashboards/Rating';



import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import First from './Pages/First';
import Dashboard from './Fiber_Star/Dashboards/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/first",
    element: <First />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path:"/rating",
    element:<Rating/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
