import { useState } from "react";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (!email || !pass) return alert("Enter details");
    alert("Login Success");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Login</h3>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={e => setPass(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
