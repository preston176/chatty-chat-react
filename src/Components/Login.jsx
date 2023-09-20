import { Button } from '@mui/material'
import './Login.css'
import { provider } from '../firebase'
import { getAuth, signInWithPopup } from 'firebase/auth';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })

            }).catch((error) => {
                alert(error)

            });
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Zendesk_Chat_Logo.png' />
                <div className="login__text">
                    <h1>Chatty app</h1>
                    <p>Use your google account to get started</p>
                </div>

                <Button variant='contained' onClick={signIn}>
                    SIGN IN WITH GOOGLE
                </Button>
            </div>
        </div>
    )
}

export default Login