import React from 'react'

//components 
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Table from '../components/common/Table/DataTable'
function Dashboard() {
  return (
    <div className="wrap-content">
      <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-md-6"><Card title="Total issue" value={15} /></div>
        <div className="col-md-6"><Card title="Total issue" value={15} /></div>
      </div>

      <table className="mt-5" style={{height: '4000px', border: '1px solid blue'}}>
        <tr>
          <td>marius</td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default Dashboard
