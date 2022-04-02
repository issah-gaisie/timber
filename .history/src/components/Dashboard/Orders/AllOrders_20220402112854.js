import React from 'react'
import Search from '../StockManagement/sub-components/Search'

const AllOrders = () => {
  return (
    <div className="w-full">
      {/* <AddnExport /> */}
      <Search/>
      <Datatab
        className="w-full rounded rounded-lg"
        columns={compartmentColumns}
        data={data}
        pagination
      />
    </div>
  )
}

export default AllOrders