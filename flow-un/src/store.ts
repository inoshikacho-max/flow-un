import { configureStore } from '@reduxjs/toolkit'
import workflowReducer from './state/workflowSlice'

export default configureStore({
  reducer: {
    workflow: workflowReducer
  }
})