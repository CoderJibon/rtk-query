import React from "react";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../../features/user/userApiSlice.js";
import { Link } from "react-router-dom";

const UserList = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetAllUserQuery(
    null,
    { refetchOnMountOrArgChange: 2 }
  );
  const [deleteUser, { data: deleteData }] = useDeleteUserMutation();

  let content = "";

  if (isError) {
    content = <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }

  const handleDeleteItem = (id) => {
    deleteUser(id);
  };

  if (isSuccess) {
    content = data.map((item, index) => {
      return (
        <div key={index} className="col-md-3 mb-3">
          <div className="card">
            <div className="card-body">
              <h3>
                <Link to={`/${item._id}`}>{item.name}</Link>
              </h3>
              <p className="card-text">{item.email}</p>
              <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section>
      <div className="container">
        <hr />
        <h5 className="card-title">User List</h5>
        <hr />
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="row">{content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
