import React from 'react';
import * as XLSX from 'xlsx';
import FilePicker from './FilePicker';

const castDataWithRows = (data, castRows) => {
  const dataRows = data.slice(1);

  return dataRows.map((row) => {
    return Object.fromEntries(castRows.map((rowName, idx) => {
      return [rowName, row[idx] ?? null];
    }));
  });
};

const CsvFilePicker = ({
  label,
  onCsvLoad,
  castRows
}) => {

  const handleFileLoad = async (fileContent, asString) => {
    const reader = XLSX.read(fileContent, { type: asString ? 'binary' : 'array' });
    const [firstSheetName] = reader.SheetNames;
    const firstSheet = reader.Sheets[firstSheetName];

    const data = XLSX.utils.sheet_to_json(firstSheet, { header: castRows ? 1 : 0 });

    onCsvLoad?.(castRows ? castDataWithRows(data, castRows) : data);
  };

  return (
    <FilePicker
      label={label}
      accept={['csv', 'xlsx']}
      onFileLoad={handleFileLoad}
    />
  );
};

export default CsvFilePicker;
