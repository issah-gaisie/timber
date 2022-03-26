import React from "react";
import AddnExport from "../sub-components/Add-Export";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { ActivePill, InactivePill } from "../sub-components/StatusPill";
import Search from "../sub-components/Search";
import TableActions from "../sub-components/TableActions";
const Concessions = () => {
  const navigate=useNavigate()
  const concessionColumns = [
    {
      name: "Name",
      selector: (row) => row.concessionName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Size",
      selector: (row) => row.size,
    },
    {
      name: "Active",
      selector: (row) => row.isActive?<ActivePill >Active</ActivePill>:<InactivePill>Inactive</InactivePill>,
    },
    {
      name:'Actions',
      selector:(row)=><div>
        <TableActions viewAction={()=>navigate(`${row.id}`)} deleteAction={()=>window.confirm(`Are you sure you want to delete this concession`)} />
      </div>
    }
  
  
  ];
  return (
    <div className="w-full">
      <AddnExport />
      <Search/>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={concessionColumns}
        data={data}
        pagination
      />
    </div>
  );
};

export default Concessions;




const data = [
    {
      id: 1,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 2,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 3,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: false,
    },
    {
      id: 4,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 5,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: false,
    },
    {
      id: 6,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: true,
    },
    {
      id: 7,
      concessionName: "A Concession",
      description: "Concession Description",
      size: 123.0,
      isActive: false,
    },
  ];
  