import React, { useState } from "react";
import "./Left.css";
import image from "../../assets/Image/image.png";
import useGetAllUsers from "../../context/useGetAllUsers";

const Users = () => {
  const [allUsers, loading] = useGetAllUsers()
  console.log("hi",allUsers);
  
  return (
    <>
      <div className="User_container">
        <h1 className="User_text">Message</h1>
      </div>
      <div className="User_box">
        {
          allUsers.map((user, index)=>(
<UserAvatar imageUrl={image} isOnline={true} username={user}  key={index} />
 
          )

      )
        }
        {/* <UserAvatar imageUrl={image} isOnline={true} username="John Doe" />
        <UserAvatar imageUrl={image} isOnline={false} username="Jane Smith" />
        <UserAvatar imageUrl={image} isOnline={false} username="Jane Smith" />
        <UserAvatar imageUrl={image} isOnline={false} username="Jane Smith" />
        <UserAvatar imageUrl={image} isOnline={false} username="Jane Smith" /> */}
      </div>
    </>
  );
};

export default Users;

// /components/UserAvatar.js

import { FaCircle } from "react-icons/fa";
import { all } from "axios";
// import useGetAllUsers from "../../context/useGetAllUsers";

export const UserAvatar = ({ imageUrl, isOnline, username }) => {
  return (
    <>
      <div className="d-flex align-items-center p-2">
        <div className="position-relative">
          <img
            src={imageUrl}
            alt={username.fullname}
            className="rounded-circle"
            width="50"
            height="50"
          />
          <FaCircle
            className={`position-absolute bottom-0 end-0 translate-middle ${
              isOnline ? "text-success" : "text-secondary"
            }`}
            style={{
              fontSize: "0.8rem",
              border: "2px solid white",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="user_message">
          <span className="ms-3">{username.fullname}</span>
          <span className="ms-3">{username.email}</span>
        </div>
      </div>
    </>
  );
};
