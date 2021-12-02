import React, { useEffect, useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { connect, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { fetchApplications, valideApplication, removeApplication } from '../../store/applications/applications.actions';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import useModal from '../../hooks/useModal';


const Applications = ({applications}) => {
  const dispatch = useDispatch()
  const { isShowing: isDeleteModalShowed, toggle: toggleDeleteModal } = useModal();
  const { isShowing: isConfirmModalShowed, toggle: toggleConfirmModal } = useModal();
  const [application, setApplication] = useState({})

  useEffect(() => {
    dispatch(fetchApplications())
  }, [dispatch])

  const deleteAction = app => {
    setApplication(app)
    toggleDeleteModal()
  }

  const validateAction = app => {
    setApplication(app)
    toggleConfirmModal()
  }

  const handleDelete = () => {
    dispatch(removeApplication(application.id))
    toggleDeleteModal()
  } 

  const handleValidate = () => {
    dispatch(valideApplication(application))
    toggleConfirmModal()
  }

  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <PersonAddAltIcon /> <span>Applications</span></h6>
        <table className="table ucp-table mt-5">
          <thead className="thead-s">
            <tr>
              <th className="text-center" scope="col">Item No.</th>
              <th className="text-center" scope="col">Fullname</th>
              <th className="text-center" scope="col">Email</th>
              <th className="text-center" scope="col">Phone</th>
              <th className="text-center" scope="col">Message </th>
              <th className="text-center" scope="col">Resume</th>
              <th className="text-center" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            {applications.map(app => (
              <tr key={app.id}>
                <td className="text-center">{app.id}</td>
                <td className="text-center">{app.fullname}</td>
                <td className="text-center">{app.email}</td>
                <td className="text-center">{app.phone}</td>
                <td className="text-center">{app.message}</td>
                <td className="text-center"><a target="_blank" href={app.resume}  rel="noreferrer" title="">CV</a></td>
                <td className="text-center"> <AddIcon onClick={() => validateAction(app)} /> 
                  <DeleteOutlineOutlinedIcon onClick={() => deleteAction(app)} /> </td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
      
        <Modal
          isShowing={isDeleteModalShowed}
          hide={toggleDeleteModal}
          title="Confirmation" 
        >
          <p className="mt-2 text-bold"> <strong>Vous etes sur le point de refuser la demande du formateur &quot; {application.fullname} &quot;</strong> <br />
          voulez-vous confirmez ? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleDeleteModal} 
              text="Annuler"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={handleDelete} 
            text="Refuser"
          /> 
          </div>
        </Modal>

        <Modal
          isShowing={isConfirmModalShowed}
          hide={toggleConfirmModal}
          title="Confirmation" 
        >
          <p className="mt-2 text-bold"> <strong>Vous etes sur le point d&apos;accepter la demande  &quot; {application.fullname} &quot;</strong> a etre formateur<br />
          voulez-vous confirmez ? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleConfirmModal} 
              text="Annuler"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={handleValidate} 
            text="Accepter"
          /> 
          </div>
        </Modal>

    </div>
  )
}

Applications.propTypes = {
  applications: PropTypes.array
}


const mapStateToProps = state => {
  return{
    applications: state.applications.applications
  }
}
 

export default connect(mapStateToProps)(Applications)
