import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {

    const [state, dispatch] = useStateValue()

const signIn = () => {

    auth
    .signInWithPopup(provider)
    .then((result) => {

       dispatch({
           type: actionTypes.SET_USER,
           user: result.user

       })
     console.log(result);  
})
 

.catch((error) => alert(error.message))

}


    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                alt=""
                />

                <img src="https://logosmarken.com/wp-content/uploads/2020/04/Facebook-Logo.png"
                alt=""
                />
                </div>
                <Button type ="submit" onClick={signIn}>
                    Sign in
                </Button>
            
        </div>
    )
}

export default Login
