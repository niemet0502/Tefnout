import React from 'react'
import useModal from '../hooks/useModal'

//components 
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Table from '../components/common/Table/DataTable'
import Modal from "../components/common/Modal"
function Dashboard() {
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-6"><Card title="Total issue" value={15} /></div>
          <div className="col-md-6"><Card title="Total issue" value={15} /></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
