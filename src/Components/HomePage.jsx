import React from 'react'
import './HomePage.css'
import App from './../App';
import LockIcon from '@mui/icons-material/Lock';

function HomePage() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img src="https://play-lh.googleusercontent.com/3yTPEqbJpq3xLoldVwWvYSbalYpUiNn8ZHPW39oTMf1cRB1Bp6N5e9sMH0w3-QY9FLw=w240-h480-rw" alt="" />
            </div>
            <div className="home__desc">
                <h2>
                    Welcome to Chatty App
                </h2>
            </div>
            <div className="home__footer">
                <p><span><LockIcon /></span>Your messages are end-to-end Encrypted</p>
            </div>
        </div>
    )
}

export default HomePage