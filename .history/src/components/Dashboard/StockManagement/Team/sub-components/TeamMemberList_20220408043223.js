import React from "react";
import DataTable from "react-data-table-component";

const TeamMemberList = () => {
  const teamMemberColumns = [
    {
      name: "User",
      selector: (row) => row.user,
    },
    {
      name: "Team",
      selector: (row) => row.teamId,
    },
  ];
  return <div>TeamMemberList</div>;
};

export default TeamMemberList;

const data = [
  {
    isActive: false,
    userId: 356,
    user: "Ernest",
    teamId: 2,
    id: 1,
  },
  {
    isActive: false,
    userId: 234,
    teamId: 2,
    user: "Yaw",
    id: 2,
  },
  {
    isActive: false,
    userId: 34,
    user: "Gaisie",
    teamId: 2,
    id: 3,
  },
];
