import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomTable from '../common/Table'

function CapturedTable({folder, tasks, onTaskInput, newTasks, handleAction, deleteTask}) {
  useEffect(() => {
  }, [tasks])
  
  const columns = [
        { path: "count", label: "Sr No.", counter: 0 },
        { path: "desc", label: "Tasks" },
        { path: "actions", 
          label: "What's Next?",
          content: task => (
                <button className="btn action" onClick={() => handleAction(task)}> Take Action</button>
            )
        },
        { path: "date", label: "Date" },
        { key: 'delete',
          content: task => (
                    <button className="btn delete" onClick={() => deleteTask(task)}> Trash</button>
          )
        }
  ]
  
  return (
    <div className="container-fluid captured_body">
        <div className="row captured_tabs">
            <div className="col-12 col-lg-2">
                <div className="d-flex">
                    <div className="flex-fill p-2">
                        <Link 
                            className={folder=== 'professional' ? 'active' : null} 
                            to="/captured/professional" 
                            params={{folder: 'professional'}}>
                              Professional
                        </Link>
                    </div>
                    <div className="flex-fill p-2">
                        <Link 
                          className={folder=== 'personal' ? 'active': null}
                          to="/captured/personal" 
                          params={{folder: 'personal'}}>
                            Personal
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row captured_table">
            <CustomTable 
                columns = {columns}
                data = {tasks}
                newData={newTasks}
                handleInput={onTaskInput}
                folder={folder}
            />
        </div>
    </div>
  );
}

export default CapturedTable;