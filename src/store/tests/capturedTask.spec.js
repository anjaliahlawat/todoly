import { addTask, taskAdded } from '../capturedTasks'
import {apiCallBegan } from '../api'
import configureStore from '../configureStore'

describe("capturedTaskSlice", () => {
  describe("action creators", () => {
    it('should handle addTask action', async () => {
       const store = configureStore()
       const task = { 
          tasks : {
            desc : 'dd',
            category: 'pp',
            date: 'datee'
          },
          user: 'user'
       } 
       await store.dispatch(addTask(task.tasks))
       expect(store.getState().entities.capturedTasks.list).toHaveLength(1)
      //  console.log(store.getState())
    })

    // it("addTask", () => {
    //     const task = { 
    //         tasks : {
    //           desc : 'dd',
    //           category: 'pp',
    //           date: 'datee'
    //         },
    //         user: 'user'
    //     }
    //     const result = addTask(task.tasks)

    //     const expected = {
    //       type: apiCallBegan.type,
    //       payload: {
    //         url: '/captured/create',
    //         method: 'post',
    //         data : {tasks: JSON.stringify(task.tasks), user: task.user},
    //         onSuccess : taskAdded.type
    //       }
    //     }

    //     expect(result).toEqual(expected)
    // })
  })
})