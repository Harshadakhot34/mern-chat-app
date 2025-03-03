import React from "react";
import "./Right.css";
import image from "../../assets/Image/image.png";

const ChatUser = () => {
  return (
    <div>
      <div className="userChat_title">
        <UserAvatar imageUrl={image} isOnline={true} username="John Doe" />
        {/* <UserAvatar imageUrl={image} isOnline={false} username="Jane Smith" /> */}
      </div>
    </div>
  );
};

export default ChatUser;

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
