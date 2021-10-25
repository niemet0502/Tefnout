import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import { fetchTrainingState, fetchChapter } from '../../store/formation/formation.actions'
import DoneIcon from '@mui/icons-material/Done';
function Training({
    currentUser,
    dispatch,
    match,
    trainingProgress,
    currentChapter}) {
  
  const [currentChapterId, setCurrentChapterId] = useState(0)
  
  useEffect(() => {
    const { slug } = match.params
    dispatch(fetchTrainingState(slug,currentUser.id))
  }, [dispatch, match])

  useEffect(() => {
    dispatch(fetchChapter(currentChapterId))
  }, [currentChapterId])

  return (
    <div style={{paddingTop: '120px'}} className="border border-danger formation_wrapper">
      <div className="formation_content">
        <div className="col-md-12 d-flex  p-3">
          {trainingProgress.map(tr => (
            <span className="timeline__steps" key={tr.section_id}>
              {tr.chapters.map(chapter => (
                <span onClick={() => setCurrentChapterId(chapter.id)} className={`timeline__step ${chapter.is_valide}`} key={chapter.id}>
                  <span className="timeline__stepName">{chapter.chapter_title}</span>
                  { currentChapter.id == chapter.id ? <span className="timeline__progressMarker"></span> : '' }
                </span>
              ))}
              <span className="timeline__splitChapter"></span>
          </span>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-md-8 p-3">


            <div className="ov_text_wrap m-4">
              <div className="ov_text">
                  <h4>{currentChapter.title}</h4>
                  <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation eyee. ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolorrepr ehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat yeef cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem</p>
              </div>
              <div className="ov_text">
                  <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="ov_text">
                  <h4>Show Realtime Resualts :</h4>
                  <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisiey.</p>
              </div>
              <div className="ov_text">
                  <h4>Altime Support From Course Instractor :</h4>
                  <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.Rorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamcoey.</p>
              </div>
          </div>
          </div>
          <div className="col-md-4 p-3">
            
            <div className="section_recap" style={{marginRight: '18px'}}>
              {trainingProgress.map(tr => (
                <span key={tr.section_id}>
                  {tr.chapters.map(chapter => (
                    chapter.id == currentChapter.id ? 
                    <div className="recap_content">
                      <div className="recap_header">
                        {tr.section_title}
                      </div>
                      <div className="recap_body">
                        {tr.chapters.map(chap => (
                          <span  key={chap.id} className={ currentChapter.id == chap.id ? 'active': ''}>
                            {chap.is_valide ? <span className="doneIcon_container">
                            <DoneIcon />
                            </span> : null}
                            {chap.chapter_title}

                          </span>

                        ))}
                      </div>
                    </div>
                    : ''
                  ))}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

Training.propTypes = {
  currentUser: PropTypes.object,
  currentChapter: PropTypes.object,
  dispatch: PropTypes.func,
  match: PropTypes.func,
  trainingProgress: PropTypes.array
}

const mapStateToProps = state => {
  return{
    currentUser: state.authentication.user,
    trainingProgress: state.training.trainingState,
    currentChapter: state.training.currentChapter
  }
}

export default connect(mapStateToProps)(Training)
