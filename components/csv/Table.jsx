import React from 'react';

const Table = ({
  header,
  rows
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {
              header.map((cell, idx) => (
                <td key={idx}>
                  {cell}
                </td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, idx) => (
              <tr key={idx}>
                {
                  row.map((cell, idx) => (
                    <td key={idx}>
                      {cell ?? ''}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
