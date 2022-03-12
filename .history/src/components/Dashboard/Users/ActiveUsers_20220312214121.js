import React from "react";
import UserCard from "./sub-components/UserCard";

const ActiveUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
           {testUsers.map((user, id) => (
        <UserCard key={id} {...user} />
      ))}
    </div>
  );
};

export default ActiveUsers;
