import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/register", { username, password });
  };

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-80 mx-auto" onSubmit={handleSubmit}>
        <input
          className="block w-full rounded-sm p-3 mb-3 border text-sm"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="block w-full rounded-sm p-3 mb-3 border text-sm"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="bg-blue-500 w-full text-white rounded-sm p-3 text-sm">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
