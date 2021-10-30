import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as actions from "../store/formations/formations.actions";
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import { percentage } from '../utils/helpers';
import ProgressBar from '../components/Marketplace/ProgressBar';
import Certificate from '../components/Marketplace/Certificate';
function Dashboard({trainings,dispatch,user,certificates}) {

  useEffect(() => {
    dispatch(actions.fetchTrainings(user.id))
  }, [dispatch])

  return (
    <div className="dashboard-container">
      <div className="dashboard_sidebar">
        <nav>
          <Link to="/dashboard" className="active-link">Mes formations</Link>
          <div>
              <ul>
                <li> <Link>Formations en cours</Link> </li>
                <li> <Link>Certificats de cours</Link></li>
              </ul>
            <div
                style={{position: 'absolute', 
                    height: '100px', 
                    top: '76px',
                    left: '25px',
                    background: 'rgba(116, 81, 235, 0.08)',
                    color: 'rgba(116, 81, 235, 0.08)'}}> l
            </div>
          </div>
        </nav>
      </div>
      <div className="dashboard-content">
        <div id="trainings-in-progress">
          <h3>Formations</h3>
          <hr />
          <table>
            <thead>
              <tr>
                <td>Cours</td>
                <td>Inscription</td>
                <td>Progression</td>
                <td>Categorie</td>
              </tr>
            </thead>
            <tbody>

              {trainings.map((training) => (
                <tr key={training.id}>
                  <td> <Link to={`/training/${training.course_slug}`}> {training.course_title}  </Link></td>
                  <td> {training.inscription_date.substr(0,10)} </td>
                  <td style={{padding: '0px'}}> 
                    <ProgressBar completed={percentage(training.chapter_count,training.follow_chapters_count)} /> 
                  </td>
                  <td> {training.category_name} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id="certificats" className="mt-5">
          <h3>Certificats de cours</h3>
          <hr />

          <ul className="d-flex justify-content-center">
            {certificates.map((certif) => (
              <li key={certif.id}>
                <Certificate title={certif.course_title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  trainings: PropTypes.array,
  certificates: PropTypes.array,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    trainings: state.trainings.trainings,
    user: state.authentication.user,
    certificates: state.trainings.certificates
  }
}

export default connect(mapStateToProps)(Dashboard)
