import React, { useState } from "react";
import { useCreateUserMutation } from "../../features/user/userApiSlice.js";
import UserList from "./UserList.jsx";

const User = () => {
  const [createUser, { isLoading, isError, isSuccess, error }] =
    useCreateUserMutation();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (isError) {
    console.log(error);
  }

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(input);
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleCreateUser}>
                    <input
                      className="form-control mb-2"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="name"
                      name="name"
                      value={input.name}
                    />
                    <input
                      className="form-control mb-2"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="email"
                      name="email"
                      value={input.email}
                    />
                    <input
                      className="form-control mb-3"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="password"
                      name="password"
                      value={input.password}
                    />
                    <button className="btn btn-primary" type="submit">
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <UserList />
    </>
  );
};

export default User;
