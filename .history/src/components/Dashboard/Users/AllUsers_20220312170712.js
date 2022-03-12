import React from "react";
import UserCard from "./sub-components/UserCard";

const AllUsers = () => {
  return (
    <div className="grid w-full g grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {new Array(10).fill(0).map((_) => (
        <UserCard />
      ))}
    </div>
  );
};

export default AllUsers;
