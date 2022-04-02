import React from "react";
import { testUsers, userRoles } from "../../../utils";
import UserCard from "./sub-components/UserCard";

const InternalUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {testUsers
      .filter(({ role }) => role === userRoles.)
      .map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default InternalUsers;
