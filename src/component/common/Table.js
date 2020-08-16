import React, { useEffect } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { Table } from 'reactstrap';

function CustomTable({columns, data, handleInput, folder, newData }) {
  useEffect(() => {
  }, [data])
  return (
    <Table>
          <TableHeader columns={columns}/>  
          <TableBody 
              data={data} 
              handleInput={handleInput} 
              folder={folder}
              newData={newData} 
              columns={columns}
          />   
    </Table>
  );
}

export default CustomTable;