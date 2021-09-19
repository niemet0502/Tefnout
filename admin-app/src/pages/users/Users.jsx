import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from "../../store/users/users.actions";
import useModal from '../../hooks/useModal';
// components 
import PageHeader from '../../components/common/PageHeader';
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import FormInput from "../../components/form/FormInput"
//icons 
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// image 
import userProfil from "../../assets/img/user_profil.jpg"


function Users({users, dispatch,currentUser}) {
  const [newUser, setNewUser] = useState({email: "", name: "", profil_id: 1})
  const [selectedUser, setSelectedUser] = useState({id: null, name: "", firstname: ""})
  const { isShowing: isDeleteUserShowed, toggle: toggleDeleteUser } = useModal();
  const { isShowing: isNewUserShowed, toggle: toggleNewUser } = useModal();

  const deleteAction = user => {
    setSelectedUser(user)
    toggleDeleteUser()
  }

  const handleDelete = () =>{
    dispatch(actions.removeUser(selectedUser))
    toggleDeleteUser()
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(newUser);
    dispatch(actions.newUser(newUser))
    toggleNewUser()
    setNewUser({email: "", name: "", profil_id: 1})
    
  }

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
          handleClick={toggleNewUser}
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
              <td className="text-center">{user.phone ? user.phone : '- -'}</td>
              <td className="text-center">{user.profil_name}</td>
              <td className="text-center">
                {currentUser !== user.id && <DeleteOutlineOutlinedIcon onClick={() => deleteAction(user)} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
          isShowing={isDeleteUserShowed}
          hide={toggleDeleteUser}
          title="Delete confirmation" 
        >
          <p className="mt-2 text-bold"> <strong>You are deleting &quot; {selectedUser.name} {selectedUser.firstname} &quot; user</strong> <br />
          do you want to confirm? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleDeleteUser} 
              text="Cancel"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={() => handleDelete()}
            text="Delete"
          /> 
          </div>
        </Modal>

        <Modal
          isShowing={isNewUserShowed}
          hide={toggleNewUser}
          title="New User"
        >
          <form onSubmit={handleSubmit}>
          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="name"
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser,name: e.target.value})}
              placeholder=""
              className="prompt srch_explore"
              label="Name"
              required
              />
            </div>
          </div>

          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser,email: e.target.value})}
              placeholder=""
              className="prompt srch_explore"
              label="Email"
              required
              />
            </div>
          </div>

          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
              <label htmlFor="" className="label">Profil</label>
              <select className="select-field" name="profil_id" value={newUser.profil_id} onChange={(e) => setNewUser({...newUser, profil_id: e.target.value})} id="">
                <option value="1">Administrateur</option>
                <option value="3">Instructor</option>
              </select>
            </div>
          </div>

          <div className="ui form swdh30">
            <div className="d-flex align-items-center justify-content-end">
             <Button 
                classNames="modal-toggle" 
                handleClick={toggleNewUser} 
                text="Cancel"
                variant="secondary"
              /> 
              <Button
                text="Register"
              />
            </div>
          </div>
          </form>
        </Modal>
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
