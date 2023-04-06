import React, { useContext } from 'react'
import { useLocation, Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../Firebase/context'
import { Landing } from "./Landing";
import { ChatRoom } from "./ChatRoom"

function AuthenticatedApp() {
	const {user} = useContext(AuthContext);
	const location = useLocation();

	return !!user ? (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/room/:id" element={<ChatRoom />} />
				</Routes>
			</BrowserRouter>
	) : <Navigate to='/signin' state={{from:location}} replace />

}

export default AuthenticatedApp