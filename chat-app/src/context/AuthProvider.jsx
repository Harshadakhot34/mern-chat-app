import React, { createContext, useContext, useState } from 'react'
import Cookies from "js-cookie"
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
const initalUserState =Cookies.get("jwt") || localStorage.getItem("ChatApp");

// Parse the user data and storing in state.

const [authUser, setAuthUser] = useState(initalUserState?JSON.parse(initalUserState): undefined)
return(
  <AuthContext.Provider value={[authUser , setAuthUser]}>
{children}
  </AuthContext.Provider>
)
}

export const  useAuth = () => useContext(AuthContext);