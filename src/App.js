import React from 'react';

import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import  ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
        height = "100vh"
        projectID = "6236cec5-9de1-436a-a183-91f4bab2573b"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;