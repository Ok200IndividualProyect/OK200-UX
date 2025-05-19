import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Singup from './routes/Signup.jsx'
import Login from './routes/login.jsx'
import Dashboard from './routes/Dashboard.jsx'


const router = createBrowserRouter ([
  {
  path: "/",
  element: <Login />,
},
{
    path: "/signup",
  element: <Signup />,
},
{
    path: "/",
     element: <Dashboard />

},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
