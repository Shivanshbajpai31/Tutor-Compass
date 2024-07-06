import React, { useState } from "react";
import '../googleSignIn/SignIn.css';
import logo1 from "../assets/logo1.png";
import Saly1 from "../assets/Saly1.png";
import { auth,googleProvider } from "./firebase";
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
function SignIn({setIsAuth}){
    const navigate=useNavigate();
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider).then((result)=>{
            localStorage.setItem("isAuth",true)
            navigate("/dashboard");
            // setIsAuth(true);
        })
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert("User Not Registered!");
        });
       
    }

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
                <p style={{color:"#8D8D8D" , fontSize: "11px", marginLeft:"38px", marginTop:"0"}}>No account?
                <p style={{color: "#0E538C",marginTop:"0"}}><a href="/register">Register</a></p>
                </p>
                </div>
                <p style={{fontSize:"30px", fontWeight:"500", marginTop:"0"} } className="text4">Sign In</p>
                <div className="social">
                <div className="google" style={{backgroundColor:"#E9F1FF"}} onClick={signInWithGoogle}><p><svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"10px"}}>
                <path d="M24.3761 13.2526C24.3761 12.3174 24.2987 11.6349 24.1311 10.9271H13.2333V15.1484H19.63C19.5011 16.1975 18.8047 17.7774 17.2571 18.839L17.2354 18.9803L20.681 21.5962L20.9198 21.6196C23.1122 19.6353 24.3761 16.7157 24.3761 13.2526Z" fill="#4285F4"/>
                <path d="M13.2326 24.375C16.3664 24.375 18.9973 23.3638 20.919 21.6197L17.2563 18.839C16.2762 19.5089 14.9607 19.9766 13.2326 19.9766C10.1631 19.9766 7.55802 17.9923 6.62936 15.2496L6.49324 15.261L2.91038 17.9784L2.86353 18.106C4.77223 21.8218 8.69286 24.375 13.2326 24.375Z" fill="#34A853"/>
                <path d="M6.63001 15.2497C6.38498 14.5419 6.24317 13.7835 6.24317 13C6.24317 12.2163 6.38498 11.458 6.61712 10.7502L6.61063 10.5995L2.98286 7.83849L2.86416 7.89381C2.07749 9.43578 1.6261 11.1673 1.6261 13C1.6261 14.8326 2.07749 16.5641 2.86416 18.106L6.63001 15.2497Z" fill="#FBBC05"/>
                <path d="M13.2326 6.0233C15.4122 6.0233 16.8824 6.94594 17.7207 7.71696L20.9965 4.5825C18.9846 2.74987 16.3665 1.625 13.2326 1.625C8.69289 1.625 4.77224 4.17804 2.86353 7.89384L6.61649 10.7503C7.55805 8.00763 10.1632 6.0233 13.2326 6.0233Z" fill="#EB4335"/>
                </svg></p>
                <p style={{fontSize:"11px", color:"#4285F4", paddingTop:"1.5px"}}>Sign In with Google</p></div>
                <div className="fb"><svg width="38" height="38" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="55" rx="9" fill="#F7F7F7"/>
                <ellipse cx="29.5" cy="25.34" rx="12.6875" ry="12.6875" fill="url(#paint0_linear_12_725)"/>
                <path d="M34.2249 30.3802L34.7885 26.7992H31.2629V24.4763C31.2629 23.4964 31.7544 22.5407 33.3336 22.5407H34.9375V19.492C34.9375 19.492 33.4825 19.25 32.0921 19.25C29.1872 19.25 27.2903 20.9655 27.2903 24.0698V26.7992H24.0625V30.3802H27.2903V39.0375C27.9383 39.1367 28.6012 39.1875 29.2766 39.1875C29.9519 39.1875 30.6148 39.1367 31.2629 39.0375V30.3802H34.2249Z" fill="#F7F7F7"/>
                <defs>
                <linearGradient id="paint0_linear_12_725" x1="29.5" y1="12.6525" x2="29.5" y2="37.9522" gradientUnits="userSpaceOnUse">
                <stop stopColor="#18ACFE"/>
                <stop offset="1" stopColor="#0163E0"/>
                </linearGradient>
                </defs>
                </svg>
                </div>
                <div className="apple">
                <svg width="38" height="38" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="55" rx="9" fill="#F6F6F6"/>
                <path d="M42.1875 27C42.1875 33.762 36.5098 39.25 29.5 39.25C22.4902 39.25 16.8125 33.762 16.8125 27C16.8125 20.2319 22.4902 14.75 29.5 14.75C36.5098 14.75 42.1875 20.2319 42.1875 27Z" fill="#283544"/>
                <path d="M35.4469 23.9002C35.3777 23.9392 33.7295 24.7622 33.7295 26.5869C33.8072 28.6678 35.8094 29.3976 35.8437 29.3976C35.8094 29.4366 35.5415 30.3917 34.7478 31.393C34.1179 32.2554 33.4188 33.125 32.3572 33.125C31.3474 33.125 30.9849 32.5502 29.8197 32.5502C28.5684 32.5502 28.2143 33.125 27.2563 33.125C26.1947 33.125 25.4438 32.2088 24.7796 31.3545C23.9167 30.2363 23.1832 28.4815 23.1573 26.7965C23.1399 25.9037 23.3302 25.026 23.8131 24.2805C24.4948 23.2398 25.7117 22.5333 27.0407 22.51C28.059 22.4791 28.9652 23.139 29.5867 23.139C30.1822 23.139 31.2956 22.51 32.5553 22.51C33.0991 22.5105 34.5491 22.6579 35.4469 23.9002ZM29.5005 22.3318C29.3193 21.5164 29.8197 20.701 30.2858 20.1809C30.8813 19.5519 31.8219 19.125 32.633 19.125C32.6848 19.9404 32.3566 20.74 31.7701 21.3224C31.2438 21.9514 30.3376 22.425 29.5005 22.3318Z" fill="white"/>
                </svg>
                </div>
                </div>
                <div className="credentials">
                    <form>
                    <p>Enter your Email Address</p>
                    <input type="email" placeholder='Email address'className="email" onChange={(e)=>setEmail(e.target.value)}></input>
                    <p>Enter your Password</p>
                    <input type="password" placeholder='Password' className="email" onChange={(e)=>setPassword(e.target.value)}></input>
                    <div style={{fontSize:"11px", display:"flex"}}><p><input type="checkbox"></input></p> <span style={{paddingTop:"12px", paddingLeft:"3px"}}>Remember Me?</span>
                    <p style={{color:"#4285F4",marginLeft:"90px", marginTop:"13.5px"}}>Forgot Password</p></div>
                    <button className="buttonSignIn" onClick={onLogin}>Sign In</button>
                    </form>
                </div>
                <div className="empty"></div>
            </div>
        </div>
    )
}
export default SignIn
