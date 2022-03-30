import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import { useNavigate } from "react-router-dom";
import Search from "../sub-components/Search";
import TableActions from "../sub-components/TableActions";

const TeamMembers = () => {
  const navigate = useNavigate();
  const speciesColumns = [
    {
      name: "Name",
      selector: (row) => row.teamName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Team Members",
      selector: (row) => {
        
        return (
          <div class="flex -space-x-1">
            {row.teamMembers.slice(0,4).map((member) => (
              <div className="group relative">
              <span class="flex justify-center items-center bg-gray-400 group-hover:bg-gray-500 h-7 text-white font-bold w-7 rounded-full ring-2 ring-white">
                {member.name[0]}
              </span>
              </div>
            ))}
          </div>
        );
      },
    },
    {
      name: "Active",
      selector: (row) =>
        row.isActive ? (
          <ActivePill>Active</ActivePill>
        ) : (
          <InactivePill>Inactive</InactivePill>
        ),
    },
    {
      name: "Actions",
      selector: (row) => (
        <div>
          <TableActions
            viewAction={() => navigate(`${row.id}`)}
            deleteAction={() =>
              window.confirm(`Are you sure you want to delete this species`)
            }
          />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <AddnExport />
      <Search />
      <DataTable
        className="w-full rounded rounded-lg"
        columns={speciesColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default TeamMembers;

const data = [
  {
    id: 1,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Issah" },
      { id: 1, name: "Lady" },
    ],
    isActive: true,
  },
  {
    id: 2,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Gaisie" },
      { id: 2, name: "Issah" },
    ],
    isActive: true,
  },
  {
    id: 3,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Levit" },
      { id: 2, name: "Issah" },
    ],
    isActive: false,
  },
  {
    id: 4,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Issah" },
      { id: 2, name: "Pious" },
    ],
    isActive: true,
  },
  {
    id: 5,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Issah" },
      { id: 2, name: "Lala" },
    ],
    isActive: false,
  },
  {
    id: 6,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Issah" },
      { id: 2, name: "Kaka" },
    ],
    isActive: true,
  },
  {
    id: 7,
    teamName: "A Species",
    description: "Species Description",
    teamMembers: [
      { id: 1, name: "Issah" },
      { id: 2, name: "Baba" },
    ],
    isActive: false,
  },
];
