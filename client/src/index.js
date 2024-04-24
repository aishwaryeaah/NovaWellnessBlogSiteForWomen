import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './Components/Layout';
import Errorpage from './pages/Errorpage';
import Home from './pages/Home';
import Postdetail from './pages/Postdetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/Userprofile';
import Authors from './pages/Authors';
import Createpost from './pages/Createpost';
import Editpost from './pages/Editpost';
import Deletepost from './pages/Deletepost';
import Categoryposts from './pages/Categoryposts';
import Authorposts from './pages/Authorposts';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import UserProvider from './context/userContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    errorElement: <Errorpage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <Postdetail/>},
      {path: "register", element: <Register/>},
      {path: "Login", element: <Login/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <Createpost/>},
      {path: "posts/:id/edit", element: <Editpost/>},
      {path: "posts/categories/:category", element: <Categoryposts/>},
      {path: "posts/users/:id", element: <Authorposts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/edit", element: <Editpost/>},
      {path: "posts/:id/delete", element: <Deletepost/>},
      {path: "logout", element: <Logout/>}
      
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router = {router} />
  </React.StrictMode>
);


