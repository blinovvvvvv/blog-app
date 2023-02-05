import { configureStore } from '@reduxjs/toolkit'

import { reducers } from '@/store/rootReducers'

export const store = configureStore({ reducer: reducers })

export type RootState = ReturnType<typeof store.getState>
