import "./styles.css";
import Sidebar from "./Sidebar";

import Widgets from "./Widgets";
import Login from "./Login";
import {auth} from "./Firebase";
import React,{useEffect,useState} from 'react';
import {useStateValue} from "./StateProvider.js";
import Home from "./Home";
import { BrowserRouter as 
Router , Route ,Switch }  from 'react-router-dom';

export default function App() {
  const [{},dispatch] = useStateValue();
  const [{user}] = useStateValue();
  


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

     dispatch({
type:"ADD_USER",
user:authUser
     })
    } )

  },[user]);
 
  return (
  <Router>
   <div className="app">
    <Switch>
    <Route path="/" exact ><Home /></Route>
    <Route path="/login" exact><Login /></Route>
    
    </Switch>
    </div>
  </Router>
  );

}
