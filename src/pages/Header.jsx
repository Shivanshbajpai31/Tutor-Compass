import React from "react";
import logo1 from "../assets/logo1.png";
import './Header.css';
import Ellipse from "../assets/Ellipse 9.png";
import { useNavigate } from "react-router-dom";
function Header(){
    const navigate=useNavigate();
    const handleProgress=()=>{
        navigate('/dash');
    }
    const handleHome=()=>{
        navigate('/dashboard');
    }
    return (
        <div>
            <div className="header1">
                <div className="img"><img src={logo1} alt="logo" width="125px" height="75px" /></div>
                <div className="profileSec">
                    <form>
                        <input type="text" placeholder="Explore" className="exploreSec"/>
                    </form>
                    <img src={Ellipse} alt="profile" width="40px" height="40px" className="profileImg"/>
                </div>
            </div>
            <div className="header2">
                <span className="text5">Welcome Back !</span>
                <div className="currYear">
                    <p style={{fontSize:"15px", fontWeight:"600"}}>3rd Year</p>
                    <p style={{fontSize:"15px", color:"#0060FF"}}>Change Year</p>
                </div>
            </div>
            <div className="header3">
                <div className="dashButton" onClick={handleHome}>Home</div>
                <div className="dashButton" onClick={handleProgress}>In Progress</div>
                <div className="dashButton">Completed</div>
            </div>
        </div>
    )
}
export default Header;