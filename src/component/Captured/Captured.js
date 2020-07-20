import React, { useState, useEffect } from 'react';
import CapturedTable from './CapturedTable';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../../store/capturedTasks';

function Captured({folder}) {
  // const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState([])
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.entities.capturedTasks.list)

  useEffect(() => {
      dispatch(loadTasks())     
      console.log(tasks)
  }, [])

  const saveData = () => {
     console.log('done')
  }

  const onTaskInput =(data) => {

  }
  
  return (
    <div className="captured container-fluid">
        <div className="col-12 col-md-6 col-lg-2 offset-lg-9">
                 <button onClick={saveData}>Save</button>
        </div>
        <CapturedTable 
            tasks={tasks}
            onTaskInput={onTaskInput}
            folder={folder}
        />             
    </div>
  );
}

export default Captured;