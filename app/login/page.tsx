"use client";

import React from "react";
import { useState } from "react";

export default function Login() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setfirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setlastName(e.target.value);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <form className="text-white bg-red-200 w-96 p-10">
        <div className="flex flex-col text-center items-center gap-1">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="w-72 text-black rounded-md p-1 focus:outline-none"
            type="text"
            id="firstName"
            placeholder="John"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="flex flex-col text-center items-center gap-1">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="w-72 text-black rounded-md p-1 focus:outline-none"
            type="text"
            id="lastName"
            placeholder="Doe"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="flex flex-col text-center items-center gap-1">
          <label htmlFor="username">Username:</label>
          <input
            className="w-72 text-black rounded-md p-1 focus:outline-none"
            type="text"
            id="username"
            placeholder="jdoe"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="flex flex-col text-center items-center gap-1">
          <label htmlFor="email">Email:</label>
          <input
            className="w-72 text-black rounded-md p-1 focus:outline-none"
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="flex flex-col text-center items-center gap-1">
          <label htmlFor="password">Password:</label>
          <input
            className="w-72 text-black rounded-md p-1 focus:outline-none"
            type="password"
            id="password"
            placeholder="12345678"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
      </form>
    </div>
  );
}
