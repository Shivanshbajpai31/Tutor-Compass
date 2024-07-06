import React, { useState } from "react";
import '../googleSignIn/SignIn.css';
import logo1 from "../assets/logo1.png";
import Saly1 from "../assets/Saly1.png";
import './SignIn.css'
import './Register2.css'
import { useNavigate } from "react-router-dom";
function SignIn(){
    const navigate=useNavigate();
    const [click,setClick]=useState('');
    return (
        <div className="SignIn">
            <div className="seq1">
            <img src={logo1} alt="logo" className="Logo" width="150px" height="100px"/>
            <div className="text">
                <p className="text1">Sign In To</p>
                <p className="text2">Lorem Ipsum is simply </p>
                <p className="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            </div>
            <div className="seq2">
            <img src={Saly1} alt="kidOnRocket" className="kidOnRocket" width="300px" height="300px" style={{paddingTop:"0"}} />
            </div>
            <div className="seq3">
                <div className="seq31">
                <span style={{fontSize: "14px"}}>Welcome to <span style={{color: "#0E538C", fontWeight:"600"}}>TutorCompass</span></span>
                <p style={{color:"#8D8D8D" , fontSize: "11px", marginLeft:"38px", marginTop:"0",width:"50px"}}>Have an Account?
                <p style={{color: "#0E538C",marginTop:"0"}}><a href="/signin">Login</a></p>
                </p>
                </div>
                <p style={{fontSize:"30px", fontWeight:"500", marginTop:"0"}}  className="text4">Register</p>
                <div className="credentials">
                    <form>
                    <p>Enter your Name</p>
                    <input type="text" placeholder='Name'className="name"></input>
                    <p>Select Year</p>
                    <div className="year1">
                    <div className="year">1st Year</div>
                    <div className="year">2nd Year</div>
                    </div>
                    <div className="year2">
                    <div className={click? "year year3":"year"} onClick={()=>setClick(click? "false" : "true")}>3rd Year</div>
                    <div className="year">4th Year</div>
                    </div>
                    <button  className="buttonSignIn" onClick={() => {navigate('/dashboard')}}>Register</button>


                    </form>
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}
export default SignIn
