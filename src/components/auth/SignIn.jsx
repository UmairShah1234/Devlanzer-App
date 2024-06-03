import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { auth } from '../../firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

const signIn = (e) => {
e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  console.log(userCredential);
  setError("")
})
.catch((error) => {
  console.log(error);
  setError("Invalid email or password")
});
}

  return (
    <div className="sign-in-container">
    <form onSubmit={signIn}>
      <h1>Log In to your Account</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit">Log In</button>
    </form>
    {error && <p>{error}</p>}
  </div>
  )
}

export default SignIn