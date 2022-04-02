import React from 'react'
import DataTable from 'react-data-table-component'
import Search from '../StockManagement/sub-components/Search'

const AllOrders = () => {
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