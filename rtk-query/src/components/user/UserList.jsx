import React from "react";
import { useGetAllUserQuery } from "../../app/apiSlice/apiSlice.js";

const UserList = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetAllUserQuery();

  let content = "";

  if (isError) {
    content = <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (isSuccess) {
    content = data.map((item, index) => {
      return <h1 key={index}>{item.name}</h1>;
    });
  }

  return content;
};

export default UserList;
