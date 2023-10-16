import { configureStore } from '@reduxjs/toolkit'
import abc from './features/counter/counterReducer'

export default configureStore({
  reducer: {
    counter123: abc,


  },
})