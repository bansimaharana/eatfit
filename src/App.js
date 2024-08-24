import "../src/App.css"
import Body from "./components/Body";
import { Outlet, RouterProvider } from 'react-router-dom';

import Footer from "./components/Footer";
import Header from "./components/Header"
import { Provider } from "react-redux";
import appStore from "./utils/store";

const App = () =>{
  

  return (
    < Provider store={appStore}>
    
      <Header/>
      <Outlet/>
      <Footer/>

    </Provider>
  );
}


export default App;
