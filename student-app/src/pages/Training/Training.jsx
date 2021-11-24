import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { fetchTrainingState, fetchChapter, validateChapter, unValidateChapter } from '../../store/formation/formation.actions'
import DoneIcon from '@mui/icons-material/Done';
import Button from "../../components/Marketplace/Button";
import DOMPurify from 'dompurify';

function Training({
    currentUser,
    dispatch,
    match,
    trainingProgress,
    currentChapter,
    currentChapterProgress,}) {
  
  const [currentChapterId, setCurrentChapterId] = useState(0)
  
  useEffect(() => {
    const { slug } = match.params
    dispatch(fetchTrainingState(slug,currentUser.id))
  }, [dispatch, match])

  useEffect(() => {
    const { slug } = match.params
    dispatch(fetchChapter(currentChapterId,slug,currentUser.id))
  }, [currentChapterId])

  const vChapter =  chapter => {
    const { slug } = match.params
    dispatch(validateChapter(slug,chapter,currentUser.id))
    window.scrollTo(0, 0);
  }

  const unChapter = chapter => {
    const { slug } = match.params
    dispatch(unValidateChapter(slug,chapter,currentUser.id))
    window.scrollTo(0, 0);
  }
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <div style={{paddingTop: '120px'}} className="border border-danger formation_wrapper">
      <div className="formation_content" style={{paddingBottom: '60px', marginBottom: '30px'}}>
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
                  <p dangerouslySetInnerHTML={createMarkup(currentChapter.textContent)}></p>
              </div>
            </div>
              <div className="d-flex align-items-center justify-content-center" style={{marginTop: '60px'}}>
                { currentChapterProgress == null ? 
                   <Button handleClick={() => vChapter(currentChapter.id)} text=" J AI TERMINER CE CHAPITRE JE PASSE AU SUIVANT "/> : 
                   <Button handleClick={() => unChapter(currentChapter.id)} text=" INDIQUER QUE CE CHAPITRE N EST PAS TERMINER "/>
                }
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
  trainingProgress: PropTypes.array,
  currentChapterProgress: PropTypes.any,
}

const mapStateToProps = state => {
  return{
    currentUser: state.authentication.user,
    trainingProgress: state.training.trainingState,
    currentChapter: state.training.currentChapter,
    currentChapterProgress: state.training.currentChapterProgress
  }
}


export default connect(mapStateToProps)(Training)
