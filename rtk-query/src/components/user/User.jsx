import React, { useState } from "react";
import { useCreateUserMutation } from "../../app/apiSlice/apiSlice.js";

const User = () => {
  const [createUser, { isLoading, isError, isSuccess }] =
    useCreateUserMutation();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(input);
  };

  return (
    <>
      <form onSubmit={handleCreateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          name="name"
          value={input.name}
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          name="email"
          value={input.email}
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="password"
          name="password"
          value={input.password}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default User;
