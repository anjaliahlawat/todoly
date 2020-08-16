import React, { useState, useEffect } from 'react';
import CapturedTable from './CapturedTable';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, getProfessionalTasks, getPersonalTasks, addTask, deleteTask } from '../../store/capturedTasks';

function Captured({ folder, notify }) {
  const [newTasks, setNewTasks] = useState([])
  const dispatch = useDispatch()
  let professionalTasks = useSelector(getProfessionalTasks)
  let personalTasks =  useSelector(getPersonalTasks)
  let [unsavedTask, setUnsavedtask] = useState([])

  useEffect(() => {
      dispatch(loadTasks(folder)) 
      console.log(professionalTasks)
  }, [professionalTasks, personalTasks])

  const addTasks = (type) => { 
    const newTask = {
        desc: '',
        category: folder,
        date: new Date(),
    }
    setNewTasks([...newTasks, newTask])
  }

  const saveData = async () => {
      if(newTasks.length >0){
        const verifiedTask = verifyTask()
        await dispatch(addTask(verifiedTask))
        notify('success', `${verifiedTask.length} task saved.`)
        setNewTasks([])         
      }
      else{
          notify('info', "Oops! Looks like you forgot to add a task.")
      }
  }

  const onTaskInput =(e, index) => {
     const {name, value} = e.target
     const temp_arr = [...newTasks]
     temp_arr[index][name] = value
     setNewTasks([...temp_arr])
  }

  const handleAction=(task) => {
      console.log(task)
  }

  const deleteTasks= async (task) => {
      await dispatch(deleteTask(task))
  }

  const verifyTask = () => {
     let newArr = []
     for(let i=0; i < newTasks.length; i++){
        if(newTasks[i].desc)
            newArr.push(newTasks[i])
     }
     return newArr
  }

  return (
    <div className="container-fluid captured">
        <div className="row">
            <button className="add-btn" onClick={addTasks}>Add</button>
            <button className="save-btn" onClick={saveData}>Save</button>
        </div>
        <div className="row">
            <CapturedTable
                newTasks={newTasks} 
                tasks={folder === 'professional' ? professionalTasks : personalTasks}
                onTaskInput={onTaskInput}
                folder={folder}
                handleAction={handleAction}
                deleteTask={deleteTasks}
            />           
        </div>  
    </div>
  );
}

export default Captured;