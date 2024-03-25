import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Search from './Components/Search/Search';
import Profile from './Components/Profile/Profile';
import Users from './Components/Users/Users';
import Showdetails from './Components/Showdetails/Showdetails';
import Posts from './Components/Posts/Posts';
import Postdetails from './Components/Post/Postdetails/Postdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/search",
        element: <Search></Search>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/users/:id",
        element: <Showdetails></Showdetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path:'/posts',
        element: <Posts></Posts>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts')
      },

    {
      path:"/posts/:id",
      element: <Postdetails></Postdetails>,
      loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
