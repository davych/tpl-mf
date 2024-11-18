import React from 'react'
import { ProDescriptions } from '@ant-design/pro-components'

const Detail: React.FC = () => {
  const data = {
    id: '123',
    name: 'Dealer Name',
    address: '123 Main St, City, Country',
    phone: '123-456-7890',
    email: 'dealer@example.com',
  }

  return (
    <ProDescriptions title="Dealer Details" column={2}>
      <ProDescriptions.Item label="ID">{data.id}</ProDescriptions.Item>
      <ProDescriptions.Item label="Name">{data.name}</ProDescriptions.Item>
      <ProDescriptions.Item label="Address">{data.address}</ProDescriptions.Item>
      <ProDescriptions.Item label="Phone">{data.phone}</ProDescriptions.Item>
      <ProDescriptions.Item label="Email">{data.email}</ProDescriptions.Item>
    </ProDescriptions>
  )
}

export default Detail
