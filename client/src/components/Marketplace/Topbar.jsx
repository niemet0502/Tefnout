import React from 'react'
import img_01 from "../../assets/img/img_01.jpg"
import c_author from "../../assets/img/c_author.png"
function Topbar() {
  return (
    <div>
      <div class="col-lg-4 col-md-6">
          <div class="course_single mb-30">
              <div class="c_thumb">
                <img src={img_01} alt=""/>
              </div>
              <div class="course_content">
                  <div class="c_head">
                      <span class="cat">Architecture</span>
                      <span class="price">$246</span>
                  </div>
                  <h3 class="title"><a href="course-details.html">The Power of Podcast for Story telling Process</a></h3>
                  <div class="rating_wrap ul_li">
                      <span>13 votes</span>
                      <ul class="rating_star ul_li">
                          <li><i class="fas fa-star"></i></li>
                          <li><i class="fas fa-star"></i></li>
                          <li><i class="fas fa-star"></i></li>
                          <li><i class="fal fa-star"></i></li>
                          <li><i class="fal fa-star"></i></li>
                      </ul>
                  </div>
                  <ul class="c_bottom ul_li">
                      <li><i class="fal fa-file-alt"></i>180</li>
                      <li><i class="fal fa-user"></i>28k</li>
                      <li><i class="fal fa-eye"></i>57k</li>
                      <li>
                          <div class="author">
                              <img src={c_author} alt=""/>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Topbar
