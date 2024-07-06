import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import SignIn from '../src/googleSignIn/SignIn';
import Register1 from '../src/googleSignIn/Register1';
import Register2 from '../src/googleSignIn/Register2';
import Dashboard from './pages/Components/Dashboard/Dashboard';
import HomePageDup from './pages/Components/Home/HomePageDup';
import Dashboard2Dup from './pages/Components/Dashboard/Dashboard2Dup';
import CourseSelection2Dup from './pages/Components/CourseSelection2/CousreSelection21';
import CourseSelection3Dup from './pages/Components/CourseSelection2/CousreSelection3';
import Live from "./pages/Components/Live/Live";
import Live2 from "./pages/Components/Live/Live2";
import Enroll from "./pages/Components/Live/Enroll";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageDup/> ,
  },
  {
    path: "/signin",
    element: <SignIn/> ,
  },
  {
    path: "/register",
    element: <Register1/> ,
  },
  
  {
    path: "/details",
    element: <Register2/> ,
  },
  {
    path: "/dashboard",
    element: <Dashboard/> ,
  },
  // {
  //   path: "/course",
  //   element: <CourseSelectionDup /> ,
  // },
  {
    path: "/dash",
    element: <Dashboard2Dup /> ,
  },
  {
    path: "/course",
    element: <CourseSelection2Dup /> ,
  },
  {
    path: "/teacher",
    element: <CourseSelection3Dup /> ,
  },
  {
    path: "/live",
    element: <Live /> ,
  },
  {
    path: "/quiz",
    element: <Live2 /> ,
  },
  {
    path: "/enroll",
    element: <Enroll /> ,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
