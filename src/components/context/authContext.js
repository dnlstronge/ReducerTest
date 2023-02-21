import React, { createContext, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}
})

export const AuthContextProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logoutHandler = () => {
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn, 
            onLogout: logoutHandler, 
            onLogin: loginHandler  }}>

        </AuthContext.Provider>
    )
}

export default AuthContext;