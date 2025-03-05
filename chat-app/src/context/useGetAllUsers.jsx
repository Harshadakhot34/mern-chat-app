import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const useGetAllUsers = () => {

  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
  
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("http://localhost:5000/user/alluser", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Ensure loading stops even if there's an error
      }
    };
  
    getUser();
  }, []);
  

  return [allUsers, loading];
};

export default useGetAllUsers;
