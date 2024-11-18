import React from 'react'
import ProTable, { ProColumns } from '@ant-design/pro-table'

interface Dealer {
  id: number
  name: string
  location: string
  status: string
}

const columns: ProColumns<Dealer>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
]

const data: Dealer[] = [
  { id: 1, name: 'Dealer One', location: 'New York', status: 'Active' },
  { id: 2, name: 'Dealer Two', location: 'Los Angeles', status: 'Inactive' },
  // Add more data as needed
]

const Listing: React.FC = () => {
  return (
    <ProTable<Dealer>
      columns={columns}
      dataSource={data}
      rowKey="id"
      search={false}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="Dealer Listing"
    />
  )
}

export default Listing
