import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About'
import Error from './components/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';

import { Body } from './components/Body';
import RestaurantDetails from './components/RestaurantDetails';
// import Instamart from './components/Instamart'
const Instamart=lazy(()=>import("./components/Instamart"))

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/> 
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurant/:id',
        element:<RestaurantDetails/>
      },
      {
        path:'/instamart',
        element:<Suspense><Instamart/></Suspense>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

