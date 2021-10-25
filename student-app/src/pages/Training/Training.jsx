import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { fetchTrainingState, fetchChapter } from '../../store/formation/formation.actions'
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
        <h2>Progression</h2>
        <div className="col-md-12 d-flex">
          {trainingProgress.map(tr => (
            <span className="timeline__steps" key={tr.section_id}>
              {tr.chapters.map(chapter => (
                <span onClick={() => setCurrentChapterId(chapter.id)} className={`timeline__step ${chapter.is_valide}`} key={chapter.id}>
                  <span className="timeline__stepName">{chapter.chapter_title} {chapter.id}</span>
                  { currentChapter.id == chapter.id ? <span className="timeline__progressMarker"></span> : '' }
                </span>
              ))}
              <span className="timeline__splitChapter"></span>
          </span>
          ))}
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
