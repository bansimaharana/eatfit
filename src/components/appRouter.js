import {createBrowserRouter} from 'react-router-dom';
import Offer from './Offer';
import Help from './Help';
import Signin from './Signin';
import Cart from './Cart';
import Search from './Search';
import Body from './Body';
import App from '../App';




const appRouter = createBrowserRouter([
    { 
      path:"/",
      element:<App/>,
      children:[
        {
          path: "/Offer",
          element: <Offer/>
        },
        {
          path: "/",
          element: <Body/>
      },
       {
          path: "/Help",
          element: <Help/>
        },
        {
            path: "/Signin",
            element: <Signin/>
        },
        {
            path: "/Cart",
            element: <Cart/>
        },
        {
          path: "/Search",
          element: <Search/>
      },
        
    ]}
   
    
  ]);

  export default appRouter;