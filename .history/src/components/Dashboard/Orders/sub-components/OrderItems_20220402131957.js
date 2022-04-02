import React from 'react'
import DataTable from 'react-data-table-component'

const OrderItems = () => {

    
  return (
    <div className='w-full'>
        <DataTable
        
        />
    </div>
  )
}

export default OrderItems



const data = [
    {
      id: 1,
      orderNumber: "order-234tvd",
      description: "Order Description",
      status:'completed',
      numberOfProducts:13,
      totalAmount:130,
      isActive: true,
    },
    {
      id: 2,
      orderNumber: "order-234tvd45",
      description: "Order Description",
      status:'completed',
      numberOfProducts:13,
      totalAmount:130,
      isActive: true,
    },
    {
      id: 3,
      orderNumber: "order-234t5jvd",
      description: "Order Description",
      status:'completed',
      numberOfProducts:13,
      totalAmount:130,
      isActive: false,
    },
  ];