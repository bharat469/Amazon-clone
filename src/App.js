
import React,{useEffect} from 'react'
import Header from './header'
import Home from './home'
import Checkout from './checkout'
import Login from './Login'
import {auth} from './firebase'
import Payment from './payment'
import Footer from './Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import { useStateValue } from './StateProvider'




function App() {
  
  const[{},dispatch]  = useStateValue();
  
  
  
  useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
  return (
<Router>

   <>
   <Switch>
     <Route path="/login">
      <Login/>
     </Route>
<Route path="/checkout">
<Header/>

<Checkout/>
<Footer/>

</Route>
     <Route path="/payment"> 
      <Header/>
    <Payment/>
<Footer/>

     </Route>

<Route path="/">

<Header/>
<Home/>
<Footer/>
</Route>


   </Switch>
   </>

</Router>
  );
}

export default App;
