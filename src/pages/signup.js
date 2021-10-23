import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { googleAuthPatient, signUpPatient } from "../api/authentication";
import Login from "../Vectors/Sign in-amico.svg";
import { GoogleLogin } from 'react-google-login';
import { cleanStateAction, patientGoogleAuth, patientSignupAction } from "../redux/actions/userAuth";
import { useHistory } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.authReducer);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password!==confirmPassword)
    {
        // console.log("Password Mismatch");
        return;
    }
    dispatch(patientSignupAction({email,password}));
  }
  const handleGoogleAuth = (response) => {
    // console.log(response)
    dispatch(patientGoogleAuth({email:response.profileObj.email,password:response.googleId}))
  }

  useEffect(()=>{
    if(currentUser.isLoggedIn)
    {
      history.goBack();
    }
    dispatch(cleanStateAction())
  },[])

  useEffect(()=>{
    if(currentUser.isLoggedIn)
    {
      setTimeout(()=>{
        history.push('/userdashboard');
      },2000)
    }
    else if(currentUser.isSignedUp)
    {
      setTimeout(()=>{
        history.push('/signin');
      },2000)
    }
  },[currentUser])


  return (
    <div>
      <div
        className="h-full pt-12 md:py-28 pb-6 px-2 md:px-0 bg-tertiary border-4 border-light rounded-2xl m-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15) !important",
          backdropFilter:
            "blur(10px) saturate(160%) contrast(45%) brightness(140%) !important",
        }}
      >
        <div className="flex justify-around">
          <div className="lg:max-w-xl md:max-w-xl lg:w-full md:w-1/2 w-5/6 mt-0 hidden lg:block">
            <img src={Login} alt="Login" />
          </div>
          <div>
            <div className="bg-white mx-auto max-w-lg p-8 md:p-12 mt-10 rounded-xl">
              <section className="header">
                <h3 className="font-bold flex flex-row text-gray-600 text-xl text-inline justify-center items-center">
                  Welcome to &nbsp;
                  <span className="text-tertiary text-3xl">
                    Heart-to-Heart
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart"
                    className="text-tertiary ml-2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </h3>
                <p className="text-gray-600 pt-2">Sign up your account</p>
              </section>
              <section className="form mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="email mb-6 pt-3 rounded-xl bg-light">
                    <input
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      type="email"
                      id="email"
                      required
                      className="bg-light rounded-full w-full text-gray-700 focus:outline-none focus:border-primary transition duration-500 px-3 pb-3 tracking-widest"
                    />
                  </div>

                  <div className="password mb-6 pt-3 rounded-xl bg-light">
                    <input
                      placeholder="Password"
                      type="password"
                      id="password"
                      required
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className="bg-light rounded-xl w-full text-gray-700 focus:outline-none  
			            					  focus:border-primary transition duration-500 px-3 pb-3 tracking-widest"
                    />
                  </div>
                  <div className="password mb-6 pt-3 rounded-xl bg-light">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      required
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      className="bg-light rounded-xl w-full text-gray-700 focus:outline-none  
			            					  focus:border-primary transition duration-500 px-3 pb-3 tracking-widest"
                    />
                  </div>
                  <div className="flex flex-row justify-between mb-6">
                    {/* <a
                      href="/signin"
                      className="text-secondary text-sm hover:underline font-semibold"
                    >
                    </a> */}
                    <p className="text-sm font-medium text-gray-500">
                      Already have an account?{" "}
                      <a
                        href="/signin"
                        className="text-tertiary hover:underline font-semibold"
                      >
                        Sign In
                      </a>
                    </p>
                  </div>
                  <div className="space-y-3 flex flex-col">
                    <button
                      className="bg-tertiary font-bold py-2 rounded hover:shadow-xl transition duration-200 text-white"
                      type="submit"
                    >
                      Sign Up
                    </button>
                    
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                        render={renderProps => (
                            <button
                      onClick={renderProps.onClick} disabled={renderProps.disabled}
                      className="bg-tertiary font-bold py-2 rounded hover:shadow-xl transition duration-200 text-white flex flex-row space-x-2 items-center justify-center"
                    >
					            <div><svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 172 172"
                        
                      >
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="none"
                          strokeWidth="1"
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          stroke-miterlimit="10"
                          stroke-dasharray=""
                          stroke-dashoffset="0"
                          font-family="none"
                          font-weight="none"
                          font-size="none"
                          text-anchor="none"
                          
                        >
                          <path d="M0,172v-172h172v172z" fill="none"></path>
                          <g fill="#f38181">
                            <path d="M89.90583,87.08217v0c0,7.55367 6.1275,13.68117 13.68117,13.68117h25.34133c-4.35017,14.13267 -15.05717,24.84683 -30.53,27.70633c-24.58883,4.55083 -49.17767,-13.36583 -51.52833,-38.26283c-2.43667,-25.76417 17.76617,-47.44333 43.03583,-47.44333c7.181,0 13.94633,1.763 19.90183,4.86617c5.42517,2.83083 12.0615,1.69133 16.383,-2.63733v0c6.837,-6.837 5.02383,-18.36817 -3.569,-22.78283c-12.02567,-6.17767 -26.02217,-9.05867 -40.79267,-7.439c-32.84483,3.59767 -59.555,30.28633 -63.15267,63.13117c-4.73717,43.215 28.97483,79.765 71.2295,79.765c45.63733,0 64.29933,-32.3575 68.07617,-60.18567c1.73433,-12.75667 -8.471,-24.02267 -21.34233,-24.037l-33.03833,-0.043c-7.56083,-0.01433 -13.6955,6.11317 -13.6955,13.68117z"></path>
                          </g>
                        </g>
                      </svg>
					  </div>	
                      
					  <div>
                            Sign Up With Google
					  </div>
                    </button>
                          )}
                        buttonText=""
                        onSuccess={handleGoogleAuth}
                        onFailure={handleGoogleAuth}
                        cookiePolicy={'single_host_origin'}
                        />
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </div>
    </div>
  );
}

export default SignUp;