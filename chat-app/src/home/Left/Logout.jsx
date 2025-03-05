import React, { useState } from "react";
import "./Left.css";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/user/logout");
      localStorage.removeItem("ChatUser");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logout succesfully");
      window.location.reload()
    } catch (error) {
      console.log("error", error);
    }

    setLoading(false);
  };
  return (
    <div className="px-4 pt-2">
      <CiLogout className="Logout-icon" onClick={handleLogout} />{" "}
    </div>
  );
};

export default Logout;
