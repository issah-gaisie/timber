import React from "react";
import { testUsers } from "../../../utils";
import UserCard from "./sub-components/UserCard";

const AllUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {testUsers.map((user) => (
        <UserCard />
      ))}
    </div>
  );
};

export default AllUsers;
