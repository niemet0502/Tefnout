import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import * as actions from "../store/dashboard/dashboard.actions"
import { Link } from 'react-router-dom'
//components 
import Card from '../components/common/Card'
import PageHeader from "../components/common/PageHeader"
import Button from "../components/common/Button"
//icons
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
function Dashboard({user, dispatch, data}) {
  
  useEffect(() => {
    
    if(user.profil_id == 1){
      dispatch(actions.getAdminStat())
    }else{
      dispatch(actions.getInstructorStat(user.id))
    }
    
  }, [dispatch])
  return (
    <div className="wrap-content">
      <div className="container-fluid">
      <h6 className="page-title"> <DashboardOutlinedIcon /> <span> { user.profil_id == 1 ? 'Admin': 'Formateur'}  Tableau de bord</span></h6>
        <div className="row d-flex">
          { user.profil_id == 1 ? 
            <div className="row d-flex"> 
              <div className="col-md-3"><Card title="Total Cours" value={data.courses} /></div>
              <div className="col-md-3"><Card title="Total Formations" value={data.formations} /></div>
              <div className="col-md-3"><Card title="Total Formateurs" value={data.instructors} /></div>
              <div className="col-md-3"><Card title="Total Apprenants" value={data.students} /></div>
            </div> : 
              <div className="row d-flex"> 
                <div className="col-md-6"><Card title="Total Cours" value={data.courses} /></div>
                <div className="col-md-6"><Card title="Total Apprenants" value={data.students} /></div>
                <div>
                    <PageHeader 
                    Icon={LibraryBooksOutlinedIcon} 
                    text="Course"
                    > 
                      <Link to="/new-course">
                        <Button 
                          text="Nouveau cours"
                        /> 
                      </Link>
                    </PageHeader>

                </div>
              </div>
          }
        </div>   
      </div>
    </div>
  )
}
Dashboard.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object,
  dispatch: PropTypes.func
}
const mapStateToProps = state => {
  return{
    user: state.authentication.user,
    data: state.dashboard.data
  }
}

export default connect(mapStateToProps)(Dashboard)
