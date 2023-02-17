import React, { useState } from 'react';
import CsvFilePicker from './CsvFilePicker';
import Table from './Table';
import CsvExporter from './CsvExporter';

const CsvTableComponent = () => {
  const [rows, setRows] = useState([]); //definir variable de estado para un componente. 

  const handleCsvLoad = (rows) => {
    setRows(rows);
  };

  return (
    <div>
      <CsvFilePicker
        onCsvLoad={handleCsvLoad}
        castRows={["poNum", "poDate", "buyer", "vendor", "requestDate", "requestNote", "inventoryCostBalance"]}
      />

      <CsvExporter
        disabled={!rows.length}
        rows={rows}
        filename="my-file.xlsx"
      />

      {
        rows.length &&
          <Table
            header={Object.keys(rows[0])}
            rows={rows.map((row) => Object.values(row))}
          />
      }
    </div>
  );
};

export default CsvTableComponent;
