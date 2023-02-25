import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element= {<App />} />
    <Route path="about" element= {<div>About</div>} />
    <Route path="pricing" element= {<div>Pricing</div>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
