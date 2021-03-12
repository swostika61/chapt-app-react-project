import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'Project-ID':'6236cec5-9de1-436a-a183-91f4bab2573b', 'User-Name': username, 'User-Secret': password}
        try {
            // username / password => chatengine -> gives messages
            await axios.get('https://api.chatengine.io/chats', {headers:authObject})
            //works out -> logged in
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        } catch (error) {
            // error : try with new user name
            setError('Oops,incorrect credential')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

