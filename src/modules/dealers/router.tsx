import { createHashRouter } from 'react-router-dom'
import CloseListing from './pages/close/Listing'
import CloseDetail from './pages/close/Detail'
import ManagersListing from './pages/managers/Listing'
import ManagersDetail from './pages/managers/Detail'
import Welcome from './pages/Welcome'
import Dealer from './pages/Dealer'
import React from 'react'

export default function getRouter(basename: string) {
  const router = createHashRouter(
    [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/close',
        element: <Dealer />,
        children: [
          {
            path: '',
            element: <CloseListing />,
          },
          {
            path: 'detail',
            element: <CloseDetail />,
          },
        ],
      },
      {
        path: '/manager',
        element: <Dealer />,
        children: [
          {
            path: '',
            element: <ManagersListing />,
          },
          {
            path: 'detail',
            element: <ManagersDetail />,
          },
        ],
      },
    ],
    {
      basename,
    },
  )
  return router
}
