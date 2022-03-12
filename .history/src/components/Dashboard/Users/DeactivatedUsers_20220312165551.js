import React from "react";
import UserCard from "./sub-components/UserCard";

const DeactivatedUsers = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-4">
      {new Array(10).fill(0).map((_) => (
        <UserCard />
      ))}
    </div>
  );
};

export default DeactivatedUsers;
