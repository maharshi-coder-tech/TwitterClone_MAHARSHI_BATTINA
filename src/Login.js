import React , {useState} from 'react';
import "./Login.css";
import {useHistory} from 'react-router-dom';
import { auth } from "./Firebase";
import {useStateValue} from "./StateProvider.js";

function Login () {
  const history = useHistory();
  const[{state},dispatch] = useStateValue();

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
   
  const signInHandler = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(auth => {
      history.push("/");
    }).catch(error => alert(error.message));
  }
  const signUpHandler = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) => {
      console.log(auth)
      history.push("/");
    } ).catch(error => alert(error.message)); 
  }

  return(
    <div className="login">
      <img onClick={() => history.push("/") } src ="https://logotyp.us/files413/twitter.svg"/>
<form>
  Email<input type="text" onChange={e => setEmail(e.target.value)} value={email}/>
Password<input type="password" onChange= {e => setPassword(e.target.value)} value={password} />
<button onClick ={signInHandler} type="submit">Login</button>
<button onClick={signUpHandler} type ="submit">Create new account</button>
  
  </form>
    </div>

  )
}
export default Login;