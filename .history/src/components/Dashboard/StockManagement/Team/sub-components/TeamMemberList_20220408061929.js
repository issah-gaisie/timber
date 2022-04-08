import React from "react";
import DataTable from "react-data-table-component";
import TableActions from "../../sub-components/TableActions";

const TeamMemberList = (props) => {
  const teamMemberColumns = [
    {
      name: "User",
      selector: (row) => row.user,
    },
    {
      name: "Team",
      selector: (row) => row.team,
    },
    {
      name: "Team",
      selector: (row) => row.team,
    },
    {
      name: "Team",
      selector: (row) => row.team,
    },
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            noView
            deleteAction={() =>
              window.confirm(`Are you sure you want to delete this compartment`)
            }
          />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <DataTable
        className="w-full rounded rounded-lg"
        columns={teamMemberColumns}
        dense
        data={data}
        disabled={props.disabled}
        pagination
      />
    </div>
  );
};

export default TeamMemberList;

const data = [
  {
    isActive: false,
    userId: 356,
    team: "Tree team",
    user: "Ernest",
    teamId: 2,
    id: 1,
  },
  {
    isActive: false,
    userId: 234,
    teamId: 2,
    team: "Tree team",
    user: "Yaw",
    id: 2,
  },
  {
    isActive: false,
    userId: 34,
    team: "Tree team",
    user: "Gaisie",
    teamId: 2,
    id: 3,
  },
];
