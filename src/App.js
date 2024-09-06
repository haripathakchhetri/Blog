import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Main from './features/dashboard/Main';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import { useGetAllProductsQuery } from './features/product/productApi';
import ProductAdmin from './features/admin/ProductAdmin';
import AddForm from './features/admin/AddForm';
import ProductEdit from './features/admin/ProductEdit/ProductEdit';
import ProductDetail from './features/product/ProductDetail';
import AdminRoute from './ui/AdminRoute';
import CartPage from './features/cart/CartPage';
import ProfileMain from './features/user/ProfileMain';
import OrderDetail from './features/order/OrderDetail';
import UserRoute from './ui/UserRoute';
import NoLoginRoute from './ui/NoLoginRoute';




const App = () => {


  // const { isError, isFetching, isLoading, data, error } = useGetAllProductsQuery();
  // console.log(data)


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
          element: <NoLoginRoute />,
          children: [

            {
              path: "login",
              element: <Login />
            },
            {
              path: "register",
              element: <Register />
            },

          ]
        },



        //admin routes
        {
          element: <AdminRoute />,
          children: [
            {
              path: "product-admin",
              element: <ProductAdmin />
            },
            {
              path: 'product-add',
              element: <AddForm />
            },
            {
              path: 'product-edit/:id',
              element: <ProductEdit />
            }


          ]
        },



        {
          path: 'product-detail/:id',
          element: <ProductDetail />
        },

        {
          element: <UserRoute />,
          children: [

            {
              path: 'cart-page',
              element: <CartPage />
            },

            {
              path: 'user-profile',
              element: <ProfileMain />
            },

            {
              path: 'user-order/:id',
              element: <OrderDetail />
            }

          ]
        },





      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App