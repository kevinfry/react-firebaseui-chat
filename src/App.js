import './App.css';
import Signin from './components/Signin';
import { createBrowserRouter, RouterProvider, Outlet, } from 'react-router-dom';
import AuthProvider from './Firebase/context';
import {Landing} from "./components/Landing";
import {ChatRoom} from "./components/ChatRoom";
import React from "react";
import Welcome from "./components/Welcome";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/rooms',
        element: <Landing />
      },
      {
        path: "/room/:id",
        element: <ChatRoom />
      },
    ]
  }
])

function NavbarWrapper() {
  return <>
    <Welcome />
    <Outlet />
  </>
}


function App() {
  return (
        <div className="container">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </div>
  );
}

export default App;
