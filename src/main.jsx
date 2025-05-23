import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'


const router = createBrowserRouter ([
  {
  path: "/",
  element: <Signup />,
},
{
    path: "/signup",
  element: <Signup />,
},
{
    path: "/dashboard",
     element: <Dashboard />

},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
