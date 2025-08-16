import { useState } from 'react'
import supabase from '../helper/supabaseClient';
import { Link, useNavigate } from 'react-router';import React from 'react'

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if(error){
            setMessage(error.message);
            setEmail("");
            setPassword("");
            return;
        }
        if (data){
            navigate("/dashboard");
            return null;
        }
    }
    
  return (
    <div>
      <h1>Login</h1>
      <br /><br />

        {message && <span>{message}</span>}
    
        <form onSubmit={handleSubmit}>
            <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='email'
            required />
            <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password" placeholder='password'
            required />
            <button type='submit'>Log in</button>
        </form>

        <span>Don't have an account?</span>
        <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
