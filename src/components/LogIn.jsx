import { useState } from "react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../lib/firebase";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigateTo = useNavigate();
  const [signInCreds, setSignInCreds] = useState({
    email: "",
    password: "",
  });

  const SignIn = (e) => {
    e.preventDefault();
    console.log(signInCreds);
    signInWithEmailAndPassword(auth, signInCreds.email, signInCreds.password)
      .then((userCredential) => {
        navigateTo("/homepage");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form
        className="flex flex-col p-4 h-full w-4/12 bg-red-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"
        onSubmit={(e) => SignIn(e)}
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

        <label>{signInCreds.email}</label>

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
