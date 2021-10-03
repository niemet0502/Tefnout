import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import sImg from "../../assets/img/s_01.png"
function CategoryCard({image, title}) {
  return (
    <CategoryCardComponent>
      <div className="ct_single">
          <div className="ser_thumb mb-4">
            {image == null ? <img src={sImg} alt=""/> : <img src={image} alt=""/>}    
          </div>
          <h3><a href="courses.html">{title}</a></h3>
          <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor.</p>
          <div className="ser_icon pt-25">
              <a href="courses.html">
                <ArrowRightAltIcon/>
              </a>
          </div>
      </div>
    </CategoryCardComponent>
  )
}

CategoryCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const CategoryCardComponent = styled.div`
    flex: 0 0 auto;
    width: 25%;
    padding-right: 0px !important; 
    padding-left: 0px !important;

  .ct_single {
    background: #fff;
    padding: 45px 30px;
    padding-right: 20px;
    border: .5px solid #f7f7f7;
    position: relative;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
}
.ct_single h3 {
	font-size: 22px;
	margin-bottom: 20px;
}

.ct_single h3 a{
  text-decoration: none;
}
.ct_single p {
    font-size: 16px;
}

.ct_single:hover {
	box-shadow: 0px 13px 27px 0px rgba(218, 218, 218, 0.45);
	z-index: 1;
}
.ct_single:hover .ser_icon a {
    background-color: #0073ff;
    color: #fff;
}

.ser_icon a {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background: #f6f6f6;
    text-align: center;
    line-height: 50px;
    color: #6f849d;
}
`;

export default CategoryCard
