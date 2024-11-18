import React from 'react'
import ProTable, { ProColumns } from '@ant-design/pro-table'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useFindPetsByStatusQuery } from '@/store/apis/pet'

interface Dealer {
  id: number
  name: string
  location: string
  status: string
}

const data: Dealer[] = [
  { id: 1, name: 'Dealer One', location: 'New York', status: 'Active' },
  { id: 2, name: 'Dealer Two', location: 'Los Angeles', status: 'Inactive' },
  // Add more data as needed
]

const Listing: React.FC = () => {
  const navigate = useNavigate()
  const { data: pets, isLoading } = useFindPetsByStatusQuery({ status: ['available'] })
  console.log(pets)
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
    // operations column
    {
      title: 'Operations',
      valueType: 'option',
      render: () => {
        // view detail button and history go here
        return (
          <Button
            onClick={() => {
              navigate('/close/detail')
            }}
          >
            view
          </Button>
        )
      },
    },
  ]
  return (
    <ProTable<Dealer>
      columns={columns}
      dataSource={data}
      loading={isLoading}
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
