import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './pages/App';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element= {<App />}>
    <Route index element= {<h2>Dashboard</h2>} />
    <Route path="accounts" element= {<h2>About</h2>} />
    <Route path="sales" element= {<h2>Sales</h2>} />
    <Route path="expenses" element= {<h2>Expenses</h2>} />
    <Route path="Reports" element= {<h2>Reports</h2>} />
    <Route path="*" element= {<h2>404 not found</h2>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
