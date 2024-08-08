import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Main from './features/dashboard/Main';
import Login from './features/auth/Login';
import Register from './features/auth/Register';


const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />

        },

        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        }

      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App