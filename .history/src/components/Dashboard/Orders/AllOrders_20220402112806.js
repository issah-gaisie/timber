import React from 'react'

const AllOrders = () => {
  return (
    <div className="w-full">
      {/* <AddnExport /> */}
      <Seac/>
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