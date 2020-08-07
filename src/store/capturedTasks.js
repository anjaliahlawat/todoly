import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan} from './api'
import moment from 'moment'
import { getUser } from "../services/authService";

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

   return dispatch(
      apiCallBegan({
         url: url + '/list',
         method: 'post',
         data: {
            user: getUser().userEmail
         },
         onStart:  tasksRequested.type,
         onSuccess: tasksReceived.type,
         onError: tasksRequestFailed.type
      })
   )
}

export const addTask = tasks => apiCallBegan({
   url: url + '/create',
   method: 'post',
   data: {tasks: tasks, user: getUser().userEmail},
   onSuccess: taskAdded.type
})

export const getProfessionalTasks =createSelector(
    state => state.entities.capturedTasks,
    capturedTasks => capturedTasks.list.filter(task => task.category === 'professional')
  );

export const getPersonalTasks =createSelector(
    state => state.entities.capturedTasks,
    capturedTasks => capturedTasks.list.filter(task => task.category === 'personal')
  );
