import {createBrowserRouter} from 'react-router-dom';
import Offer from './Offer';
import Help from './Help';
import Signin from './Signin';
import Cart from './Cart';
import Search from './Search';
import Body from './Body';
import App from '../App';
import Error from './Error';
import Menu from './Menu';
import { lazy, Suspense } from 'react';
import Instamart from './instamart';
import Shimmer from './shimmer';


const instamart = lazy(()=>import("./instamart"))



const appRouter = createBrowserRouter([
    { 
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path: "Offer",
          element: <Offer/>
        },
        {
          path: "",
          element: <Body/>
      },
       {
          path: "Help",
          element: <Help/>
        },
        {
            path: "Signin",
            element: <Signin/>
        },
        {
            path: "Cart",
            element: <Cart/>
        },
        {
          path: "Search",
          element: <Search/>
        },
        {
          path: "menu/:id",
          element: <Menu/>
        },
        {
          path: "instamart",
          element: 
          <Suspense fallback={<Shimmer/>}>
          <Instamart/>
          </Suspense>
        },
    ]}
   
    
  ]);

  export default appRouter;