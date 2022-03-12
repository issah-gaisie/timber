import React from "react";
import UserCard from "./sub-components/UserCard";

const AllUsers = () => {
  return (
    <div className="grid w-full grid-rows-auto grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      .map((_) => (
        <UserCard />
      ))}
    </div>
  );
};

export default AllUsers;
