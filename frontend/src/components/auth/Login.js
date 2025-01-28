import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfaCode, setMfaCode] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticateUser({ email, password, mfaCode }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="MFA Code"
        value={mfaCode}
        onChange={(e) => setMfaCode(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
