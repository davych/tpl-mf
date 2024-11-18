import React from 'react'
import ReactDOM from 'react-dom/client'
import getRouter from './router'
import { RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { AbilityContext } from '@/casl/Can'
import { defineAbility } from '@casl/ability'

const ability = defineAbility((can, cannot) => {
  can('delete', 'dealer')
})

export default function mount(el: HTMLElement, { basename }: { basename: string }) {
  const router = getRouter(basename)
  ReactDOM.createRoot(el).render(
    <Provider store={store}>
      <AbilityContext.Provider value={ability}>
        <RouterProvider router={router} />
      </AbilityContext.Provider>
    </Provider>,
  )
}
