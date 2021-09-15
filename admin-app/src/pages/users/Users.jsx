import React from 'react'

// components 
import PageHeader from '../../components/common/PageHeader';
import Button from "../../components/common/Button";

//icons 
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
function Users() {
  return (
    <div className="wrap-content">
      <h6 className="page-title"> <PeopleOutlineIcon /> <span>Users</span></h6>
      
      <PageHeader 
        Icon={PeopleOutlineIcon} 
        text="User"
      > 
        <Button 
          classNames="modal-toggle" 
          text="Create User"
        /> 
      </PageHeader>

      <table className="table ucp-table mt-5">
        <thead className="thead-s">
          <tr>
            <th className="text-center" scope="col">Id</th>
            <th  className="text-center" scope="col">Avatar</th>
            <th className="text-center" scope="col">Full Name</th>
            <th className="text-center" scope="col">Email</th>
            <th className="text-center" scope="col">Phone</th>
            <th className="text-center" scope="col">Action</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Users
