import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../features/user/userApiSlice.js";

const SingleUser = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetSingleUserQuery(id);
  let content = "";
  if (isError) {
    content = <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (isSuccess) {
    content = (
      <div>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">{content}</div>
            </div>
          </div>
        </div>
        <hr />
        <Link to="/">back</Link>
      </div>
    </div>
  );
};

export default SingleUser;
