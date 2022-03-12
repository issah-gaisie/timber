import React from "react";
import UserCard from "./sub-components/UserCard";
import { testUsers } from "../../../utils";

const DeactivatedUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {testUsers
        .filter((user) => user.active != true)
        .map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
    </div>
  );
};

export default DeactivatedUsers;
