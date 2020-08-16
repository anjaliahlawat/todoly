import React from 'react';

function TableHeader({columns}) {
  return (
    <thead>
        <tr>
            {columns.map((item, key) => {
              return(
                <td key={key}>{item.label}</td>
              )
            })}
        </tr>
    </thead>  );
}

export default TableHeader;