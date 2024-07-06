import './App.css';
import { useState } from 'react';
import SignIn from '../src/googleSignIn/SignIn';
import Register1 from '../src/googleSignIn/Register1';
import Register2 from '../src/googleSignIn/Register2';
import Dashboard from '../src/pages/Dashboard';
import { BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import { auth } from './googleSignIn/firebase';

function App() {
  const [isAuth,setIsAuth]=useState(false);
  const userSignOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname='/login';
    })
  }
  return (
    <Router>
      {isAuth?<Link to="/dashboard">Login</Link>:<button onClick={userSignOut}>Logout</button>}
      <Route path='/register' element={<Register1/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/details' element={<Register2/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Router>
  )
}

export default App
