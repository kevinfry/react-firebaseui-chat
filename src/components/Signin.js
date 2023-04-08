import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../Firebase/context'
import {Navigate} from 'react-router-dom'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'

function Signin() {

	const {user} = useContext(AuthContext)

	useEffect(() => {
		const uiConfig = {
			signInOptions: [
				// Leave the lines as is for the providers you want to offer your users.
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				// firebase.auth.TwitterAuthProvider.PROVIDER_ID,
				// firebase.auth.GithubAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
				// firebase.auth.PhoneAuthProvider.PROVIDER_ID,
				// firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
			],
			callbacks: {
				singInSuccessWithAuthResult: () => false
			},
			signInFlow: 'popup',
		}

		const ui = firebaseui.auth.AuthUI.getInstance() ?? new firebaseui.auth.AuthUI(firebase.auth());
		if (ui.isPendingRedirect()) {
			ui.start('#firebaseui-auth-container', uiConfig);
		}
		ui.start('#firebaseui-auth-container', uiConfig);
	}, [])

	if (user) {
		return <Navigate to={{pathname: '/rooms'}}/>
	}

	return (
			<div>
				<div id="firebaseui-auth-container"/>
			</div>
	)
}

export default Signin