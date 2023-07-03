import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

const InterativeTable = () => {
  const [rowData] = useState([
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxster", price: 72000}
  ]);

  const [columnDefs] = useState([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' }
  ]);

  return (
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
          <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs as any}>
          </AgGridReact>
      </div>
  );
};

export default InterativeTable