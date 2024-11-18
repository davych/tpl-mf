import React from 'react'
import ReactDOM from 'react-dom/client'
import getRouter from './router'
import { RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

export default function mount(el: HTMLElement, { basename }: { basename: string }) {
  const router = getRouter(basename)
  ReactDOM.createRoot(el).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  )
}
