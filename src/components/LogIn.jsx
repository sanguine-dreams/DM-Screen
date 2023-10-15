import { useState, useEffect, useContext } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogInAuth } from "../services/services";
import { keys } from "../utils/keys";
import { DnDContext } from "../store/store";

export function Login() {
  const navigateTo = useNavigate();
 const {signInCreds, setSignInCreds} = useContext(DnDContext);


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await LogInAuth(signInCreds);
      if (result && result.token) {
        console.log(result)
        window.localStorage.setItem(keys.token, result.token);
        window.localStorage.setItem(keys.userId, result.record.id )
        setSignInCreds({...signInCreds, id: result.record.id, username: result.record.id})
       
        navigateTo(`/homepage`)
      } else {
        console.error("Invalid response from LogInAuth:", result);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  useEffect(()=>{
window.localStorage.clear()  },[])

  
 
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        className="flex flex-col p-4 w-4/12 bg-red-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100"
        onSubmit={(e) =>handleSubmit(e)}
      >
        <input
          className="p-4 bg-transparent"
          type="email"
          value={signInCreds.email}
          onChange={(e) =>
            setSignInCreds({ ...signInCreds, email: e.target.value })
          }
          placeholder="enter email"
        ></input>


        <input
          className="p-4 bg-transparent"
          type="password"
          placeholder="enter password"
          value={signInCreds.password}
          onChange={(e) =>
            setSignInCreds({ ...signInCreds, password: e.target.value })
          }
        ></input>
        <button type="=submit">Sign in </button>
      </form>
    </div>
  );
}
