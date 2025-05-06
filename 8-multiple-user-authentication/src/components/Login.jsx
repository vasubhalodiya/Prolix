import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get("https://6819e6321ac115563506e852.mockapi.io/auth");
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "user") {
          navigate("/user");
        } else {
          navigate("/");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Login;
