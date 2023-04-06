import React, { useContext } from 'react'
import { useLocation, Navigate, BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { AuthContext } from '../Firebase/context'
import { chatRooms } from '../Firebase/chatRooms'
import { MessageList } from "./MessageList";
import { MessageInput} from "./MessageInput";
import "./ChatRoom.css"

function ChatRoom() {
	const {user} = useContext(AuthContext);
	const location = useLocation();

	const params = useParams();

	const room = chatRooms.find((x) => x.id === params.id);
	if (!room) {
		// TODO: 404
	}

	return (
			<>
				<h2>{room.title}</h2>
				<div>
					<Link to="/rooms">⬅️ Back to all rooms</Link>
				</div>
				<div className="messages-container">
					<MessageList roomId={room.id} />
					<MessageInput roomId={room.id} />
				</div>
			</>
	);
}

export {ChatRoom}