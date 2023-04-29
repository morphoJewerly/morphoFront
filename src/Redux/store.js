import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import filterReducer from './filterSlice'
import {authReducer} from './auth'
import goodsReducer from './goodsSlice'
import cartReducer from './cartSlice'
import adminRouterSliceReducer from './adminRouterSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer, 
    filter:filterReducer,
    goods:goodsReducer,
    cart: cartReducer,
    auth:authReducer,
    router:adminRouterSliceReducer
  },
})
