import React from 'react'
import PropTypes from 'prop-types';

// components 
import Row from './Row';

function DataTable({headers, data}) {
  return (
    <table className="table">
      <thead>
        {headers.map((data) => {
          <Row data={data} />
        })}
      </thead>
    </table>
  )
}

DataTable.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTable
