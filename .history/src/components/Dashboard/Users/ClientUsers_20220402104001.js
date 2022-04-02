import React from "react";
import { testUsers } from "../../../utils";
import UserCard from "./sub-components/UserCard";

const ClientUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {testUsers.filter.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default ClientUsers;
