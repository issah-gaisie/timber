import React from 'react'
import DataTable from 'react-data-table-component'
import Search from '../StockManagement/sub-components/Search'

const AllOrders = () => {

    const compartmentColumns = [
        {
          name: "Name",
          selector: (row) => row.compartmentName,
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
            <TableActions viewAction={()=>navigate(`${row.id}`)} deleteAction={()=>window.confirm(`Are you sure you want to delete this compartment`)} />
          </div>
        }
      ];
  return (
    <div className="w-full">
      {/* <AddnExport /> */}
      <Search/>
      <DataTable
        className="w-full rounded rounded-lg"
        columns={compartmentColumns}
        data={data}
        pagination
      />
    </div>
  )
}

export default AllOrders