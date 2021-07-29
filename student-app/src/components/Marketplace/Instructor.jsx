import React from 'react'
import styled from "styled-components"
import team_01 from "../../assets/img/team_01.jpg"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Instructor() {
  return (
    <InstructorComponent>
      <div class="col-lg-4 col-md-6">
        <div class="team_single text-center mb-30">
            <div class="team_thumb">
                <img src={team_01} alt=""/>
                <div class="team_social social_icon">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><TwitterIcon /></a>
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><LinkedInIcon /></a>
                </div>
            </div>
            <div class="team_text">
                <h3><a href="team-details.html">Mohammad Wasim</a></h3>
                <p>Web Developer</p>
            </div>
        </div>
    </div>
    </InstructorComponent>
  )
}

const InstructorComponent = styled.div`
  /* 7. team */
.team_single {
	background: #fff;
	position: relative;
}
.team_single .team_thumb img {
	width: 100%;
}
.team_thumb {
	position: relative;
}
.team_social {
	position: absolute;
	bottom: 30px;
	left: 92px;
	padding: 6px;
	right: 92px;
	background: #fff;
	opacity: 0;
	text-align: center;
	visibility: hidden;
	transform: translateY(10px);
	-webkit-transform: translateY(10px);
	-moz-transform: translateY(10px);
	-ms-transform: translateY(10px);
	-o-transform: translateY(10px);
	transition: .3s;
	-webkit-transition: .3s;
	-moz-transition: .3s;
	-ms-transition: .3s;
	-o-transition: .3s;
}
.social_icon a {
	width: 40px;
	height: 40px;
	background: #f7f7f7;
	line-height: 43px;
	color: #a4a4a4;
	font-size: 15px;
	text-align: center;
	margin-right: 5px;
}
.social_icon a:last-child {
	margin-right: 0;
}
.team_social a {
	margin-right: 0;
}
.social_icon a:hover {
	background-color: #0073ff;
	color: #fff;
}
.team_single:hover .team_social {
	transform: translateY(0);
	-webkit-transform: translateY(0);
	-moz-transform: translateY(0);
	-ms-transform: translateY(0);
	-o-transform: translateY(0);
	opacity: 1;
	visibility: visible;
}
.team_single .team_text h3 {
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 2px;
	font-family: 'Josefin Sans', sans-serif;
}
.team_details .team_single .team_social  {
	bottom: 130px;
}
.team_details .team_single .team_text {
	position: absolute;
	bottom: 0;
	background: #fff;
	left: 10%;
	right: 10%;
}
.team_details .td_social {
	position: absolute;
	top: 50%;
	right: -27px;
	background: #fff;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	-ms-transform: translateY(-50%);
	-o-transform: translateY(-50%);
	z-index: 2;
}
.team_details .td_social li a {
	font-size: 15px;
	color: #000;
	padding: 17px 20px;
}
.team_details .td_social li a:hover {
	background-color: #000;
	color: #fff;
}
`;

export default Instructor
