import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../Firebase/context'
import app from "../Firebase/config";

function Welcome() {
	const {user} = useContext(AuthContext);

	const navigate = useNavigate();
	return !!user ? (
			<>
				<h1>TicketDevs Chat</h1>
				<p>
					<a onClick={() => {
						navigate('/');
					}}>Home</a> - <a href={'/rooms'} onClick={() => {
					navigate('/rooms');
				}}>Chat Rooms</a> - <a onClick={() => {
					app.auth().signOut();
					navigate('/');
				}}>Sign Out</a></p>
			</>
	) : <>
		<h1>TicketDevs Chat</h1>
		<p><a onClick={() => {
			navigate('/');
		}}>Home</a> - <a onClick={() => {
			navigate('/signin')
		}}>Sign In</a></p>
		<h2>Chat</h2>
		<p>If you're a music lover, logging into a TicketDevs chat room is a great way to connect with other people
			who share your passion for music.</p>
		<p><strong>Discover new music</strong></p>
		<p><strong>Meet new people</strong></p>
		<p><strong>Learn more about music</strong></p>
		<p><strong>Share your own music</strong></p>
		<button className={"btn"} onClick={() => {
			navigate('/signin')
		}}>SIGN IN / REGISTER
		</button>
	</>

}

export default Welcome