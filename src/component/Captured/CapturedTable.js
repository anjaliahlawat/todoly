import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

function CapturedTable({folder, tasks, onTaskInput, newTasks}) {

  const count = newTasks.length

  const getDate = (d) => {
    const d1 = new Date(d)
    let date = d1.getDate()
    let month = d1.getMonth()+ 1
    let year = d1.getFullYear()

    let month2 = month.toString().length === 1 ? '0' + month : month

    let finalStr = date + '-' + month2 + '-' + year
    return finalStr
  }

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
            <Table>
                <thead>
                    <tr>
                       <td>Sr.No.</td>
                       <td>Task</td>
                       <td>What's Next?</td>
                       <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {newTasks.length > 0 ? newTasks.map((item, key)=> {
                        return(
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td><input type="text" name="desc" value={item.desc} onChange={(event)=>onTaskInput(event, key)}/></td>
                                <td></td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    }) : null}
                    {tasks.length > 0 ? tasks.map((item, key) => {
                        return(
                            <tr key={count+ key}>
                                <td>{count+key+1}</td>
                                <td>{item.desc}</td>
                                <td></td>
                                <td>{getDate(item.date)}</td>
                            </tr>
                        )
                        })
                    : <tr>
                        <td> No Tasks captured.
                        </td></tr>
                    }
                </tbody>
            </Table>
        </div>
    </div>
  );
}

export default CapturedTable;