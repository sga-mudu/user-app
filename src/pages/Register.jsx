import { useState } from 'react'
import supabase from '../helper/supabaseClient';
import { Link } from 'react-router';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage("");

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if(error){
            setMessage(error.message);
            return;
        }
        if (data){
            setMessage("user account created!");
        }

        setEmail("");
        setPassword("");
    }

  return (
    <div>
      <h1>register</h1>
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
            <button type='submit'>Create account</button>
        </form>

        <span>Already have an account?</span>
        <Link to="/login">Log in</Link>
    </div>
  );
}

export default Register;
