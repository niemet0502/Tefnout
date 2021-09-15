import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from "../../store/users/users.actions";
// components 
import PageHeader from '../../components/common/PageHeader';
import Button from "../../components/common/Button";
//icons 
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// image 
import userProfil from "../../assets/img/user_profil.jpg"


function Users({users, dispatch,currentUser}) {

  useEffect(() => {
    dispatch(actions.fetchUsers())
  }, [dispatch])
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
            <th className="text-center" scope="col">Profil</th>
            <th className="text-center" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="text-center">{user.id}</td>
              <td className="text-center">{user.avatar == null ? <img src={userProfil}  style={{width: '50px'}} /> : <img src={user.avatar} style={{width: '50px'}} />}</td>
              <td className="text-center">{user.name} &nbsp; {user.firstname}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">{user.profil_name}</td>
              <td className="text-center">{user.phone ? user.phone : '- -'}</td>
              <td className="text-center">
                {currentUser !== user.id && <DeleteOutlineOutlinedIcon />}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array,
  dispatch: PropTypes.func,
  currentUser: PropTypes.number
}

const mapStateToProps = state => {
  return{
    users: state.users.users,
    currentUser: state.authentication.user.id
  }
}

export default connect(mapStateToProps)(Users)
