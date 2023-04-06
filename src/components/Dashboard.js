import React, { useContext } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { AuthContext } from '../Firebase/context'


function Dashboard() {

    const {user} = useContext(AuthContext);
    const location = useLocation();

    // <Navigate to={{ pathname: '/' }} />
    return !!user ? <div> This is Dashboard</div> : <Navigate to='/signin' state={{from:location}} replace />
  
}

export default Dashboard