import React from 'react';
import * as XLSX from 'xlsx';

const CsvExporter = ({
  disabled,
  rows,
  filename
}) => {
  const handleButtonClick = () => {
    const sheet = XLSX.utils.json_to_sheet(rows);
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, 'SheetJS');
    XLSX.writeFile(book, filename ?? 'filename.xlsx');
  };

  return (
    <button
      disabled={disabled}
      className="btn btn-success"
      onClick={handleButtonClick}
    >
      Export
    </button>
  );
};

export default CsvExporter;
