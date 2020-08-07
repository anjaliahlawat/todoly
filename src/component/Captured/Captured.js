import React, { useState, useEffect } from 'react';
import CapturedTable from './CapturedTable';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, getProfessionalTasks, getPersonalTasks, addTask } from '../../store/capturedTasks';

function Captured({ folder }) {
  const [newTasks, setNewTasks] = useState([])
  const dispatch = useDispatch()
  const professionalTasks = useSelector(getProfessionalTasks)
  const personalTasks =  useSelector(getPersonalTasks)

  useEffect(() => {
      dispatch(loadTasks(folder))  
  }, [professionalTasks, personalTasks])

  const addTasks = () => { 
    const newTask = {
        desc: '',
        category: folder,
        date: getDate(),
    }
    setNewTasks([...newTasks, newTask])
  }

  const getDate = () => {
     const d1 = new Date()
     let date = d1.getDate()
     let month = d1.getMonth()+ 1
     let year = d1.getFullYear()

     let month2 = month.toString().length === 1 ? '0' + month : month

     let finalStr = date + '-' + month2 + '-' + year
     return finalStr
  }

  const saveData = () => {
    dispatch(addTask(newTasks))
  }

  const onTaskInput =(e, index) => {
     const {name, value} = e.target
     const temp_arr = [...newTasks]
     temp_arr[index][name] = value
     setNewTasks([...temp_arr])
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
            /> 
        </div>            
    </div>
  );
}

export default Captured;