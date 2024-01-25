import { combineReducers } from "@reduxjs/toolkit"
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from "./createApi"

const rootReducer= combineReducers({
  [postApi.reducerPath]:postApi.reducer
})

export const setupStore=()=>{
  return configureStore({
      reducer:rootReducer,
      middleware:(getDefaultMidleware)=> getDefaultMidleware().concat(postApi.middleware)
  })
}