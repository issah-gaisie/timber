import React from 'react'

const AllOrders = () => {
  return (
    <div className="w-full">
      <Addn />
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