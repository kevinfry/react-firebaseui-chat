import db from "./database";
import {
	collection,
	addDoc,
	serverTimestamp,
	onSnapshot,
	query,
	orderBy,
} from 'firebase/firestore';
import React from "react";

function useMessages(roomId) {
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		const unsubscribe = getMessages(roomId, setMessages);

		return unsubscribe;
	}, [roomId]);

	return messages;
}

async function sendMessage(roomId, user, text) {
	try {
		await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
			uid: user.uid,
			displayName: user.displayName,
			text: text.trim(),
			timestamp: serverTimestamp(),
		});
	} catch (error) {
		console.error(error);
	}
}

function getMessages(roomId, callback) {
	return onSnapshot(
			query(
					collection(db, 'chat-rooms', roomId, 'messages'),
					orderBy('timestamp', 'asc')
			),
			(querySnapshot) => {
				const messages = querySnapshot.docs.map((x) => ({
					id: x.id,
					...x.data(),
				}));

				callback(messages);
			}
	);
}

export {useMessages, sendMessage, getMessages}
