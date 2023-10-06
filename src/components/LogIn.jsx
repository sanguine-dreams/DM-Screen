import { useState } from "react";
import React from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../lib/firebase";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigateTo =  useNavigate();
    const [signInCreds, setSignInCreds] = useState({
     email: '', password: ''
    });

   const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, signInCreds.email, signInCreds.password).then((userCredential) => {
        navigateTo("/homepage")}).catch((error => console.log(error)))
    }
    return(<div className="flex flex-col">
    <form onSubmit={(e) => SignIn}>
        <h1> sign in</h1>
        <input 
        type="email"
        value={signInCreds.email}
        onChange={(e) =>setSignInCreds({...setSignInCreds, email:e.target.value})}
        placeholder="enter email">
        
        </input>
        <input type="password"
        placeholder="enter password"
        value={signInCreds.password}
        onChange={(e) =>setSignInCreds({...setSignInCreds, password:e.target.value})}></input>
        <button type="=submit">Sign in </button>
    </form>

</div>)
    
  

}