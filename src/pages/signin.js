import React from 'react'
import SignIn from '../components/Signin/Index'
import { googleFormsToJson } from 'react-google-forms-hooks'

const SigninPage = () => {
    return (
        <div
            style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        marginTop: '10vh',
      }}
         >
        <iframe src="https://pabloacevedo374090.typeform.com/to/aLUyg6Kx" 
        width='50%'
        
        height="947" 
        frameborder="100px" 
        marginTop="1000" 
        marginwidth="0"
       
        
        >Parlando…</iframe>
        </div>
    )
}

export default SigninPage
