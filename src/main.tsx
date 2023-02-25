import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "pricing",
    element: <div>Pricing</div>,
  },
]);

// const routerJSX = createBrowserRouter(createRoutesFromElements(
//   <Routes>
//     <Route path="/" element= {<App />} />
//     <Route path="about" element= {<div>About</div>} />
//     <Route path="pricing" element= {<div>Pricing</div>} />
//   </Routes>
// ))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
