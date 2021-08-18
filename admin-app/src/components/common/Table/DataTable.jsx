import React from 'react'
import PropTypes from 'prop-types';

function DataTable({headers, data}) {
  return (
    <table className="table">
      <thead className="headBg">
        <tr>
          {headers.map(header => {
            return (
              <th scope="col" key={header}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((datum, index) => {
          return (
            <tr key={datum.id}>
              {Object.keys(headers).map((header, index) => {
                  <td key={index}>
                      <span>{datum[header]}</span>                      
                  </td>
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTable
