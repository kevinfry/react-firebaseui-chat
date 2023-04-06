import React,{useEffect, useState} from 'react';

import app from './config'

export const AuthContext = React.createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        app.auth().onAuthStateChanged(setUser)
    },[])

  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
}

export default AuthProvider