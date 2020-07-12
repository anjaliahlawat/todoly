import React, { useState } from 'react';
import Header from './Header';
import CapturedTable from './CapturedTable';

function Captured(props) {

  const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState([])

  const saveData = () => {
     console.log('done')
  }

  const onTaskInput =(data) => {

  }
  
  return (
    <div className="captured container-fluid">
        <Header 
            save={saveData}
        />
        <CapturedTable 
            tasks={tasks}
            onTaskInput={onTaskInput}
        />        
    </div>
  );
}

export default Captured;