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
					<a href={'/'} onClick={() => {
						navigate('/');
					}}>Home</a> - <a href={'/rooms'} onClick={() => {
					navigate('/rooms');
				}}>Chat Rooms</a> - <a href={'/privacy'} onClick={() => {
					navigate('/privacy')
				}}>Privacy</a> - <a href={'/contact'} onClick={() => {
					navigate('/contact')
				}}>Contact</a> - <a onClick={() => {
					app.auth().signOut();
					navigate('/');
				}}>Sign Out</a></p>
			</>
	) : <>
		<h1>TicketDevs Chat</h1>
		<p><a onClick={() => {
			app.auth().signOut();
			navigate('/');
		}}>Home</a> - <a onClick={() => {
			navigate('/rooms');
		}}>Chat Rooms</a> - <a onClick={() => {
			navigate('/privacy')
		}}>Privacy</a> - <a onClick={() => {
			navigate('/contact')
		}}>Contact</a> - <a onClick={() => {
			navigate('/signin')
		}}>Sign In</a></p>
		<h2>Chat</h2>
		<p>If you're a music lover, logging into a TicketDevs chat room is a great way to connect with other people
			who share your passion for music. Here are a few reasons why you might want to give it a try:</p>
		<p><strong>Discover new music</strong>: Chatting with other music fans can be a great way to discover new artists and genres that
			you might not have heard of before. You can share your favorite songs and albums, and get recommendations from
			others who have similar tastes.</p>
		<p><strong>Meet new people</strong>: Music is a universal language, and chatting with other music fans can be a great way to make
			new friends and expand your social circle. You might even meet people from all over the world who share your
			love of music.</p>
		<p><strong>Learn more about music</strong>: Chatting with other music fans can also be a great way to learn more about music
			theory, history, and culture. You can discuss the nuances of different genres, learn about the origins of
			certain styles of music, and gain a deeper appreciation for the art form.</p>
		<p><strong>Share your own music</strong>: If you're a musician yourself, logging into a music related chat room can be a great way
			to connect with other musicians and share your own work. You might even find collaborators who are interested
			in working on music projects with you.</p>
		<p>Overall, logging into a music related chat room can be a fun and rewarding experience for music lovers. So why
			not give it a try? You might just find a new favorite band or make some new friends along the way.</p>
		<button className={"btn"} onClick={() => {
			navigate('/signin')
		}}>SIGN IN / REGISTER
		</button>
	</>

}

export default Welcome