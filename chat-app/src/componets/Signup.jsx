import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //watch the password and confirm password fields

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Password don't match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    console.log(userInfo);
    await axios
      .post("http://localhost:5000/user/signup", userInfo)
      .then((response) => {
        if (response.data) {
          alert("Signup successful");
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
          <h2 className="headline2">Signup</h2>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="Input1"
              aria-describedby="Help"
              placeholder="fullname"
              {...register("fullname", { required: true })}
            />
            {errors.Fullname && (
              <span className="error_message">This field is required</span>
            )}
          </div>

          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
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
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="Password1"
              placeholder="confirm password"
              {...register("confirmPassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
            {errors.confirmPassword && (
              <span className="error_message">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="bottom-content">
            <p>
              Have an account? <Link to="/login" className="login-text"> Login</Link>
            </p>
            <button type="submit" class="btn btn-success" value={Signup}>
              Submit
            </button>
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
