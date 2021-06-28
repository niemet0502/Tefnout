import React from 'react'
import hero_icon from "../assets/img/hero_icon.png"
import hero_img from "../assets/img/hero_img.png"
import styled from "styled-components"
import Topbar from "../components/Marketplace/Topbar"
function Home() {
  return (
    <HomePage>
    <Topbar/>
    <div>
      <section class="hero_area">
                <div class="hero_wrap hero_height">
                    <div class="container-fluid">
                        <div class="row flex-row-reverse align-items-center">
                            <div class="col-xl-7 col-lg-6 col-md-12">
                                <div class="hero_img f-right">
                                    <img src={hero_img} alt=""/>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-12">
                                <div class="hero_content">
                                    <div class="icon">
                                        <img src={hero_icon} alt=""/>
                                    </div>
                                    <span># Learn Anything, Anytime, Anywhere</span>
                                    <h2>Best Online Learning For your future.</h2>
                                    <p>We believe everyone has the capacity to be creative. Turitor is a place where
                                        people develop their own potential.</p>
                                    <div class="hero_btn mt-15">
                                        <a class="thm_btn" href="courses.html">View Courses<i class="fal fa-long-arrow-right"></i></a>
                                        <a class="thm_btn thm_btn-2" href="about.html">Start Trial<i class="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    <section class="courses_area pt-120 pb-90">
      <div class="container">
        <div class="row align-items-center mb-15">
            <div class="col-lg-8 col-md-8">
                <div class="sec_title">
                    <h2>Find the right course for you</h2>
                    <p>Online learning offers a new way to explore subjects you’re passionate about.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="crs_btn text-md-end mb-20">
                    <a class="thm_btn" href="courses.html">View all<i class="fal fa-long-arrow-right"></i></a>
                </div>
            </div>
        </div>
      </div>
    </section>
    </HomePage>

  )
}

const HomePage = styled.div`
  margin: 0;
  padding: 0;

  .hero_area {
    background: #fff;
  }
  .hero_wrap {
  padding-left: 140px;
	padding-right: 140px;
	display: flex;
	align-items: center;
}
.hero_content .icon {
	margin-bottom: 36px;
}
.hero_content span {
	font-size: 18px;
	font-weight: 600;
	display: inline-block;
	color: #e5175c;
	margin-bottom: 20px;
}
.hero_content h2 {
	font-size: 60px;
	line-height: 70px;
	margin-bottom: 30px;
	max-width: 700px;
}
.hero_content p {
	font-size: 18px;
	line-height: 29px;
	max-width: 700px;
}
.hero_content .hero_btn a {
	margin-top: 20px;
	margin-right: 20px;
}
.hero_content .hero_btn a:last-child {
    margin-right: 0;
}
`;
export default Home
