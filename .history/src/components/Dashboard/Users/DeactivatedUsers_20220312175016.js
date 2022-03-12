import React from "react";
import UserCard,{DeactivatedUser} from "./sub-components/UserCard";

const DeactivatedUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {new Array(5).fill(0).map((_) => (
        <UserCard />
      ))}
    </div>
  );
};

export default DeactivatedUsers;
