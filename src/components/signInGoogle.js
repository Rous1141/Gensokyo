import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {ThemeContext} from './changeTheme'
import {useContext} from 'react'
export default function SignInGoogle() {

	const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
        	
    };
    const {theme} = useContext(ThemeContext);
	return (
		<div className='contactPage'style={{transition: theme.transition,background:theme.background,border:'solid',borderColor:theme.borderColor}}>
		<div className="google">
			<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
		</div>	
		</div>
	)
}