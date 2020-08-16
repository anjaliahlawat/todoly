import React, { useEffect } from 'react';
import _ from "lodash";

function TableBody({data, newData, folder, handleInput, columns}) {
  useEffect(() => {
  }, [data])
  const count = newData.length

  const getDate = (d) => {
    const d1 = new Date(d)
    let date = d1.getDate()
    let month = d1.getMonth()+ 1
    let year = d1.getFullYear()

    let month2 = month.toString().length === 1 ? '0' + month : month

    let finalStr = date + '-' + month2 + '-' + year
    return finalStr
  }
  const renderCell = (item, column, counter) => {
    if (column.content) return column.content(item)
    if(column.path === 'count') return counter
    if(column.path === 'date') return getDate(item.date)
    return _.get(item, column.path);
  }

  if(!data)
    return(<h5>No tasks captured.</h5>)
  return (
    <tbody>
        {newData.length > 0 ? newData.filter(item=> item.category=== folder).map((item, key)=> {
            return(
                <tr key={key}>
                    <td>{key+1}</td>
                    <td><input type="text" name="desc" value={item.desc} onChange={(event)=>handleInput(event, key)}/></td>
                    <td>{item.actions}</td>
                    <td>{getDate(item.date)}</td>
                </tr>
            )
        }) : null}
        {data.filter(item => item.category === folder).map((item, key) => {
            return(
                <tr key={count+ key}>
                    {columns.map((column, key1) =>{
                       return(
                          <td key={key1}>{renderCell(item, column, count+key+1)}</td>
                    )})}
                </tr>
               )
            })
        }
    </tbody>
           
  );
}

export default TableBody;