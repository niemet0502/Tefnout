import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as actions from "../../store/reviews/reviews.actions";
//components 
import Comments from '../../components/review/Comments';
import StarRaiting from '../../components/review/StarRaiting';
import ProgressBar from '../../components/review/ProgressBar';
//icons
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function Reviews(
      {comments, 
      commentsLoading, 
      user, 
      dispatch, 
      raiting, 
      raitingLoader}) {

  useEffect(() => {
    
    if(user.profil_id == 1){
      dispatch(actions.fetchAllComments())
      dispatch(actions.fetchAllRaiting())
    }else{
      dispatch(actions.fetchTeacherCourseComments(user.id))
      dispatch(actions.fetchTeacherCourseRaiting(user.id))
    }
  }, [])

  return (
    <div className="wrap-content">
      <div className="container-fluid">
        <h6 className="page-title"> <StarBorderOutlinedIcon /> <span>Reviews</span></h6>

        <div className="row mt-5">
					<div className="col-12">						
						<div className="student_reviews">
							<div className="row">
								<div className="col-lg-5">
									<div className="reviews_left">
										<h3>All Student Feedback</h3>
                    <div className="total_raiting">
                      <div className="_rate001">{(raiting.sum/raiting.count)}</div>	
                      { raitingLoader ? 'Loading...' : <StarRaiting count={4} />}
                      
                      <div className="_rate002">All Rating ({raiting.count})</div>	
                    </div>
                    <div className="_rate003">
											<div className="_rate004">
                        <div className="col-md-7 pr-2">
                          <ProgressBar completed={70} /> 
                        </div>
                        <div className="col-md-5 pl-1 d-flex align-items-center" style={{marginLeft: '10px',marginTop: '-5px'}}>
                          <StarRaiting count={5} />
                          <div className="_rate001" style={{marginLeft: '10px'}}>70%</div>	
                        </div>
                      </div>
                    </div>
                    <div className="_rate003">
											<div className="_rate004">
                        <div className="col-md-7 pr-2">
                          <ProgressBar completed={40} /> 
                        </div>
                        <div className="col-md-5 pl-1 d-flex align-items-center" style={{marginLeft: '10px',marginTop: '-5px'}}>
                          <StarRaiting count={4} />
                          <div className="_rate001" style={{marginLeft: '10px'}}>40%</div>	
                        </div>
                      </div>
                    </div>
                    <div className="_rate003">
											<div className="_rate004">
                        <div className="col-md-7 pr-2">
                          <ProgressBar completed={5} /> 
                        </div>
                        <div className="col-md-5 pl-1 d-flex align-items-center" style={{marginLeft: '10px',marginTop: '-5px'}}>
                          <StarRaiting count={3} />
                          <div className="_rate001" style={{marginLeft: '10px'}}>5%</div>	
                        </div>
                      </div>
                    </div>
                    <div className="_rate003">
											<div className="_rate004">
                        <div className="col-md-7 pr-2">
                          <ProgressBar completed={1} /> 
                        </div>
                        <div className="col-md-5 pl-1 d-flex align-items-center" style={{marginLeft: '10px',marginTop: '-5px'}}>
                          <StarRaiting count={2} />
                          <div className="_rate001" style={{marginLeft: '10px'}}>1%</div>	
                        </div>
                      </div>
                    </div>
                    <div className="_rate003">
											<div className="_rate004">
                        <div className="col-md-7 pr-2">
                          <ProgressBar completed={1} /> 
                        </div>
                        <div className="col-md-5 pl-1 d-flex align-items-center" style={{marginLeft: '10px',marginTop: '-5px'}}>
                          <StarRaiting count={1} />
                          <div className="_rate001" style={{marginLeft: '10px'}}>1%</div>	
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="review_right">
										<div className="review_right_heading">
											<h3>All Reviews</h3>
										</div>
									</div>

                  { commentsLoading && 'Comments are fetching...'}

                  {/* <h6>{JSON.stringify(comments)}</h6> */}

                  {comments.map((com) => (
                    <Comments 
                    key={com.id}
                    comment={com.comment}
                    title={com.course_title}
                    name={`${com.student_name} ${com.student_firstname == null ? '' : com.student_firstname}`}
                    date={com.comment_date}
                    avatar={com.student_avatar}
                                       />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Reviews.propTypes = {
  comments: PropTypes.array,
  commentsLoading: PropTypes.bool,
  raitingLoader: PropTypes.bool,
  user: PropTypes.object,
  raiting: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return{
    comments: state.reviews.comments,
    commentsLoading: state.reviews.commentsLoading,
    user: state.authentication.user,
    raiting: state.reviews.raitings,
    raitingLoader: state.reviews.raitingLoading
  }
}

export default connect(mapStateToProps)(Reviews)
