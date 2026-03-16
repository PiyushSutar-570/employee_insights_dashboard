import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const {login} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const success = login(username,password);
    if(success){
        navigate('/list');
    }
    else{
        alert("Invalid Credetials !")
    }
  }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow w-80'>
        <h2 className='text-xl font-bold mb-4'>Employee Login</h2>
        <input type="text" placeholder='username' className='w-full border p-2 mb-3'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="password" placeholder='Password' className='w-full border p-2 mb-4' onChange={(e)=>setPassword(e.target.value)} />
        <button className='w-full bg-blue-500 text-white py-2 rounded'>
            Login
        </button>
      </form>
    </div>
  )
}

export default Login