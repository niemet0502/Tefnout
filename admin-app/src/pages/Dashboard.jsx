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
    <div className="wrap-content">
      <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-md-6"><Card title="Total issue" value={15} /></div>
        <div className="col-md-6"><Card title="Total issue" value={15} /></div>
      </div>

        <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
        </button>

        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Login"
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" />
            </div>
          </form>
        </Modal>
      
      </div>
    </div>
  )
}

export default Dashboard
