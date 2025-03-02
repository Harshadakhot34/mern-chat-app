import React from "react";
import "./Left.css";
import image from "../../assets/Image/image.png";
const Users = () => {
  return (
    <>
      <div className="User_container">
        <h1 className="User_text">Message</h1>
      </div>
      <div className="User_box">
        <UserAvatar imageUrl={image} isOnline={true} username="John Doe" />
        <UserAvatar imageUrl={image} isOnline={false} username="Jane Smith" />
      </div>
    </>
  );
};

export default Users;

// /components/UserAvatar.js

import { FaCircle } from "react-icons/fa";

export const UserAvatar = ({ imageUrl, isOnline, username }) => {
  return (
    <>
      <div className="d-flex align-items-center p-2">
        <div className="position-relative">
          <img
            src={imageUrl}
            alt={username}
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
          <span className="ms-3">{username}</span>
          <span className="ms-3">{username}</span>
        </div>
      </div>
    </>
  );
};
