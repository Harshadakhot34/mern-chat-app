import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      // fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);

  
    await axios
      .post("http://localhost:5000/user/login", userInfo,  {
          withCredentials: true // important to allow cookies to be sent
        })
      .then((response) => {
        if (response.data) {
          alert("login successful");
        }
        localStorage.setItem("ChatUser", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className="Signup_container">
        <form
          action=""
          className="Signup_box"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="headline">
            Chat<span style={{ color: "green" }}>App</span>{" "}
          </h1>
          <h2 className="headline2">Login</h2>

          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error_message">This field is required</span>
            )}
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error_message">This field is required</span>
            )}
          </div>

          <div className="bottom-content">
            <p>
              New user?{" "}
              <Link to="/signup" className="login-text">
                {" "}
                Signup
              </Link>
            </p>
            <button type="submit" class="btn btn-success" value={Login}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
