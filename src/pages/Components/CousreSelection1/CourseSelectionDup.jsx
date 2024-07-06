import React from "react";
import "./CourseSelection.css";
import profile from "../../../assets/Ellipse 9.png";
import logo from "../../../assets/logo1.png";
import cn from "../../../assets/cn.png";
import rect from "../../../assets/rect.png";
import vector from "../../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
const CourseSelectionDup = () => {
  const navigate=useNavigate();
  const handleProgress=()=>{
      navigate('/dash');
  }
  const handleHome=()=>{
      navigate('/dashboard');
  }
  return (
    <div className="course-selection-dup">
       <div className="header1">
                <div className="img"><img src={logo} alt="logo" width="125px" height="75px" /></div>
                <div className="profileSec">
                    <form>
                        <input type="text" placeholder="Explore" className="exploreSec"/>
                    </form>
                    <img src={profile} alt="profile" width="40px" height="40px" className="profileImg"/>
                </div>
            </div>
            <div className="header3">
                <div className="dashButton" onClick={handleHome}>Home</div>
                <div className="dashButton" onClick={handleProgress}>In Progress</div>
                <div className="dashButton">Completed</div>
            </div>
      <img className="image-1-icon" alt="" src={cn} />
      <img
        className="course-selection-dup-child"
        alt=""
        src={rect}
      />
      <div className="computer-networks">Computer Networks</div>
      <div className="topics">12 topics</div>
      <div className="instructors">15+ instructors</div>
      <div className="choose-your-instructor">Choose Your Instructor</div>
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="live-classes" style={{color:"black"}}>Live Classes</div>
        <img className="vector-icon" alt="" src={vector} />
      </div>
      <div className="rectangle-container">
        <div className="group-item" />
        <div className="recorded-classes">Recorded Classes</div>
        <img className="vector-icon" alt="" src={vector} />
      </div>
      <div className="tutorcompass-inc-all-rights-r-parent">
        <div className="tutorcompass-inc-all">
          @2023 TutorCompass Inc. All Rights Reserved.
        </div>
        <div className="group-parent">
          <div className="about-us-wrapper">
            <div className="about-us">About us</div>
          </div>
          <div className="group-wrapper">
            <div className="terms-of-service-wrapper">
              <div className="terms-of-service">Terms of Service</div>
            </div>
          </div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="cookie-notice">Cookie Notice</div>
        </div>
        <div className="line-div" />
      </div>
    </div>
  );
};

export default CourseSelectionDup;
