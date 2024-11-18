import { configureStore } from '@reduxjs/toolkit'

import { baseApi as api } from './apis/base-api'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat(api.middleware),
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
