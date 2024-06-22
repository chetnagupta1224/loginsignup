import "./Login.css"

function Login(){

   const LoginSignup = () =>{
      const [action, setAction] = useState("Sign Up");
   }
      return(
         <div>

            <div className="header">
               <div className="logo">
                  <p>Travel<span>AI</span></p>
               </div>
               <a href="#" className="home"><span className="home">Home</span></a>
            </div>

            <div className="container">
                
                
                <div className="left-text">
                     <h1 className="heading">Travel<span>AI</span></h1>
                     <p className="one-liner">Travel.Experience.Live</p>
                     <p className="plan">New here? No <br /> worries join for free <br /> tour.</p>
                </div>

                <div className="right-box">
                  <div className="content">
                     <div className="main-text">SIGNUP</div>
                     
                  <div className="inputs">
                     
                     <input type="text" placeholder="Full Name" />
                     <input type="email" placeholder="Email" />
                     <input type="Password" placeholder="Password" />
                     <input type="Password" placeholder="Confirm Password" />
                   <button className="submit-btn">Create Account</button>
                    

                     <p className="forget-txt">Already have an account? <a href="#"><span className="sign"> Sign In</span></a></p>

                  </div>
                  </div>
                  
                </div>
                </div>
         </div>
      )

}
export default Login