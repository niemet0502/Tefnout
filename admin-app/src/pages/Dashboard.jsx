import React from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
function Dashboard() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-md-6"><Card title="Total issue" value={15} /></div>
        <div className="col-md-6"><Card title="Total issue" value={15} /></div>
      </div>


      <Button />
      

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
