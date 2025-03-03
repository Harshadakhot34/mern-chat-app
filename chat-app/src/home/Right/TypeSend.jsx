import React from 'react';
import { IoSend } from "react-icons/io5";
import './Right.css'; // Import custom CSS for styling

const TypeSend = () => {
  return (
    <div className="type_container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control input-style"
          placeholder="Type message"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text icon-style" id="basic-addon2">
          <IoSend />
        </span>
      </div>
    </div>
  );
}

export default TypeSend;
