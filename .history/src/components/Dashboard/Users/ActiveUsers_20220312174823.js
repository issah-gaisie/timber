import React from "react";
import UserCard,{ActiveUser} from "./sub-components/UserCard";

const ActiveUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {new Array(3).fill(0).map((_) => (
        <ActiveUser />
      ))}
    </div>
  );
};

export default ActiveUsers;
