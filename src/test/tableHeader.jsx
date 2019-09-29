import React from 'react';
 const TableHeader = ({Columns}) => {
     return ( 
        <thead>
        <tr>
            {Columns.map(Column=>
                <th key={Column.path || Column.id}>{Column.label}</th>
                )}
        </tr>
    </thead>
      );
 }
  
 export default TableHeader;