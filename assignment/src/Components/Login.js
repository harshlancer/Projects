import React from "react";
import "./Components.css";
import { useState } from "react";

import useHistory, { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import Navigation from "./Navigation";
function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "A" && pass === "B") {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/");
    } 
  };
  return (
    <div>
      <Navigation />
      <div className="loginbody">
        <form onSubmit={handleSubmit} className="forms">
          <label>
            Username:
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoComplete="off"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
