import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

  return (
    <div className='chats-page'>
        <div className="nav-bar">
            <div className="logo-tab">
                Unichat
            </div>
            <div className="logout-tab" onClick={handleLogout}>
                Logout
            </div>
        </div>
        <ChatEngine
            height='calc(100vh - 66px)'
            //projectId=
        />
    </div>
  )
}

export default Chats
