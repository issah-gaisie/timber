import React from 'react'
import DataTable from "react-data-table-component";

const TreeFellItemsTable = () => {
    const treeFellColumns = [
        {
          name: "Tree Fell Code",
          selector: (row) => row.treeFellCode,
        },
        {
          name: "Description",
          selector: (row) => row.description,
        },
        {
          name: "Status",
          selector: (row) => row.status,
        },
        {
          name: "Total Quantity",
          selector: (row) => row.totalQuantity,
        },
        {
          name: "Actions",
          selector: (row) => (
            <div>
              <TableActions
                viewAction={() => navigate(`/dashboard/orders/${row.id}`)}
                noDelete
              />
            </div>
          ),
        },
      ];
  return (
    <div>TreeFellItemsTable</div>
  )
}

export default TreeFellItemsTable