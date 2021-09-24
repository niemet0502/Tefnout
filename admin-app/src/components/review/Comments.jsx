import React from 'react';
import PropTypes from "prop-types"
import img from "../../assets/img/img-1.jpg";

function Comments({comment, title, name, date, avatar}) {
  return (
    <div className="review_all120 mt-5">
      <div className="review_item_course_title">
        <a href="#">{title}</a>
      </div>
      <div className="review_item">
        <div className="review_usr_dt">
          { avatar ==  null ? <img src={img} alt="student-image" /> : <img src={avatar} alt="student-image" /> }
          <div className="rv1458">
            <h4 className="tutor_name1">{name}</h4>
            <span className="time_145">{date}</span>
          </div>
        </div>
      <p className="rvds10">{comment}.</p>
     </div>  
  </div>
  )
}

Comments.propTypes = {
  comment : PropTypes.string,
  title : PropTypes.string,
  name : PropTypes.string,
  date : PropTypes.string,
  avatar : PropTypes.string
}

export default Comments
