import React from "react";
import Left from "./home/Left/Left";
import Right from "./home/Right/Right";
import "./App.css";
import Signup from "./componets/Signup";
import Login from "./componets/Login";
import { useAuth } from "../src/context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const [authUser, setAuthUser] = useAuth();

  return (
    //     <div className='Container'>
    // {/* <Left/>
    // <Right/> */}
    // <Signup/>
    // {/* <Login/> */}
    //     </div>
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="Container">
              <Left />
              <Right />
            </div>
          ) : (
            // <Login />
            <Navigate to={"/login"}/>
          )
        }
      />
      <Route path="/signup"  element={authUser ? <Navigate to="/" />:<Signup/>}/>
      <Route path="/login"  element={authUser ? <Navigate to="/" />:<Login/>}/>

    </Routes>
  );
};

export default App;
