import React, {useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import {AuthContext} from '../Firebase/context';
import app from '../Firebase/config'

function ChatApp() {

	const {user} = useContext(AuthContext)

	const navigate = useNavigate();
	return (
			<div>
				{!!user ? <div>
					<p>{`Welcome, ${user.displayName ?? user.phoneNumber}`}</p>

					<Link to="/dashboard">Dashboard</Link>
					<Link to="/contact">Contact</Link>
					<button className={"btn"} onClick={() => {
						app.auth().signOut();
						navigate('/')
					}}>Sign Out
					</button>
				</div> : (<button className="btn" onClick={() => {
					navigate('/signin')
				}}>SIGN IN / REGISTER</button>)

				}
			</div>
	)
}

export default ChatApp