import React from 'react'
import ReactDOM from 'react-dom/client'
import getRouter from './router'
import { RouterProvider } from 'react-router-dom'

export default function mount(el: HTMLElement, { basename }: { basename: string }) {
  const router = getRouter(basename)
  ReactDOM.createRoot(el).render(<RouterProvider router={router} />)
}
