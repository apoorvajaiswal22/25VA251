import React, { useState } from "react";
import "./experiment9.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setSuccess("Registration Successful!");
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

    </div>
  );
}

export default App;