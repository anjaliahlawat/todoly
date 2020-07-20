import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan} from './api'
import moment from 'moment'

const slice = createSlice({
   name: 'capturedTasks',
   initialState: {
      list: [],
      loading: false,
      lastFetch: null
   },
   reducers: {
      tasksRequested: (capturedTasks, action) => {
         capturedTasks.loading = true
      },
      tasksReceived: (capturedTasks, action) => {
         capturedTasks.list = action.payload
         capturedTasks.loading = false
         capturedTasks.lastFetch = Date.now()
      },
      tasksRequestFailed: (capturedTasks, action) => {
         capturedTasks.loading = false
      },
      taskAdded : (capturedTasks, action) => {
         capturedTasks.list.push(action.payload)
      }
   }
})

export const { 
   taskAdded, 
   tasksReceived,
   tasksRequested,
   tasksRequestFailed
} = slice.actions  

export default slice.reducer

//Action creators 
const url = '/captured'

export const loadTasks = () => (dispatch, getState) => {
   const { lastFetch } = getState().entities.capturedTasks

   const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')

   if(diffInMinutes < 10) return

   dispatch(
      apiCallBegan({
         url: url + '/list',
         method: 'post',
         data: {
            user: '5efd92d56dbd096c280eb2ee',
            category: 'professional'
         },
         onStart:  tasksRequested.type,
         onSuccess: tasksReceived.type,
         onError: tasksRequestFailed.type
      })
   )
}

export const addTask = task => apiCallBegan({
   url: url + 'create',
   method: 'post',
   data: task,
   onSuccess: taskAdded.type
})
