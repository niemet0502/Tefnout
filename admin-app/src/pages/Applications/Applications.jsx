import React, { useEffect } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { connect, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { fetchApplications } from '../../store/applications/applications.actions';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Applications = ({applications}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApplications())
  }, [dispatch])

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
                <td className="text-center"><a target="_blank" href="filename.pdf" title=""></a></td>
                <td className="text-center"> <AddIcon /> <DeleteOutlineOutlinedIcon/> </td>
              </tr>
            ))}

          </tbody>
      </table>
      </div>
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
