import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

   return (
      <div>
         <div className="header">
               <div className="logo">
                  <p className="logo-text">Travel<span>AI</span></p>
               </div>
                <a href="#" className="home"><span className="home">Home</span></a>
         </div>
         <div className="container">

               <div className="left-text">
               <h1 className="heading">Travel<span>AI</span></h1>
               <p className="one-liner">Travel.Experience.Live</p>
               <p className="plan">
                  {isSignUp ? (
                     <>
                      New here? No <br/> worries join for free tour. 
                     </>
                     ): (
                        <>
                         Plan your trip to India <br/>in seconds
                       </>
                     )}
                    </p>
                </div>
                <div className="right-box">

                    <div className= "content" >


                        <div className="main-text">{isSignUp ? "SIGNUP" : "LOGIN"}</div>
                        
            <div className= "inputs" >
                 {isSignUp ? (
                    <>
                     <input type="text" placeholder="Full Name" />
                     <input type="email" placeholder="Email" />
                     <input type="password" placeholder="Password" />
                     <input type="password" placeholder="Confirm Password" />
                     <button className="submit-btn">Create Account</button>
                      <p className="forget-txt">
                           Already have an account? <a href="#" onClick={toggleForm}><span className="sign"> Sign In</span></a>
                      </p>
                     </>) : (
                        <>
                           <input type="email" placeholder="Email" />
                           <input type="password" placeholder="Password" />
                           <button className="submit-btn">Sign In</button>
                           <p className="forget-txt">
                              Don't have an account? <a href="#" onClick={toggleForm}><span className="sign"> Sign Up</span></a>
                           </p>
                           </>
                            )}
                        </div>
                  </div>
               </div>
               </div>
          </div>
    );
}

export default Login;
