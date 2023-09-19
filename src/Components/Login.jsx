import { Button } from '@mui/material'
import './Login.css'
function Login() {
    const signIn = () => {

    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Zendesk_Chat_Logo.png' />
                <div className="login__text">
                    <h1>Sign in</h1>
                </div>

                <Button variant='contained' onClick={signIn}>
                    SIGN IN WITH GOOGLE
                </Button>
            </div>
        </div>
    )
}

export default Login