import React from "react";

import "./Right.css";
import ChatUser from "./ChatUser";
import Message from "./Message";
import TypeSend from "./TypeSend";
const Right = () => {
  return (
    <div
      className="Right_container
    "
    >
      <ChatUser />
      <Message />
      <TypeSend />
    </div>
  );
};

export default Right;
