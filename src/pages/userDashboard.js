import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPatientDetailsAction, logoutPatientAction } from "../redux/actions/userAuth";
import DashboardContent from "./DashboardContent";
import ProfilePatient from "./Profile-Patient";
import Index from "./music";
import Blog from "./blog";
import Talk from "./talk";
import Resources from "./resources"
import Loader from "./loader";
import Challenge from "./challenge.jsx";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';


function UserDashboard() {
  const currentUser = useSelector(state => state.authReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(1);
  const [loading,setLoading] = useState(false);
  // const [open, setOpen] = React.useState(
  //   "sidebar bg-white w-60 text-secondary-100 px-2 fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out"
  // );

  useEffect(()=>{
    function func(){
      if(!currentUser.isLoggedIn)
    history.goBack();
    dispatch(getPatientDetailsAction(currentUser.email))
    }
    func();
    // eslint-disable-next-line
  },[currentUser.email,currentUser.isLoggedIn,dispatch,history])

  useEffect(()=>{
    function func(){
      if(!currentUser.isRegistered)
      setTab(2);
    }
    func();
    // eslint-disable-next-line
  },[tab])

  useEffect(()=>{
    function func(){
      if(!currentUser.isLoggedIn)
    {
      setLoading(false)
      history.push('/');
    }
    else if(currentUser.isLogoutErr)
    {
      setLoading(false);
      toast.error(currentUser.isLogoutErr, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    }
    func();
    // eslint-disable-next-line
  },[currentUser])

  const handleLogout = async () => {
    setLoading(true)
    dispatch(logoutPatientAction(currentUser.email));
  }
  if(loading)
  return (
    <Loader color={'#00ADB5'}/>
  )
  else
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        <div className="menu-button bg-white flex justify-between md:hidden p-5">
          <a href="/userdashboard" className="logo p-4 block font-medium text-tertiary flex">
            <h1 className="text-xl font-bold hidden md:block">Heart-to-Heart</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart text-tertiary h-6 w-6 mt-1 ml-2"
              onClick={(e) => setTab(1)}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </a>
          <div className="mt-5">
            <span className="material-icons-outlined flex">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-tertiary ml-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => setTab(2)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-2 text-tertiary cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => setTab(3)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              

              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-tertiary ml-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => setTab(6)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-tertiary ml-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => setTab(4)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-7 w-7 text-tertiary ml-2 cursor-pointer" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  onClick={handleLogout}
                >
                  <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                  />
                </svg>
          
            </span>
          </div>
        </div>

        <div className="sidebar bg-white w-60 text-secondary-100 px-2 fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
          <div className="logo text-xl font-extrabold text-tertiary px-4 mt-5 flex p-5 bg-white">
            Heart-to-Heart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart text-tertiary mt-1 ml-2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <nav className="mt-20">
            <span
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary cursor-pointer"
              onClick={(e) => setTab(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary cursor-pointer"
              onClick={(e) => setTab(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span
              onClick={e => setTab(3)}
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </span>
            <span
              onClick={e=> setTab(4)}
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </span>
            <span
              onClick={e=> setTab(7)}
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-tertiary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                >

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span
              onClick={e=> setTab(6)}
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
            <span
              onClick={handleLogout}
              className="block py-2.5 px-20 rounded transition duration-200 hover:bg-primary mt-10 cursor-pointer"
            >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-tertiary ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                  />
                </svg>
            </span>
          </nav>
        </div>
        <div className="flex-1  bg-tertiary bg-opacity-50 md:ml-60">
          {
            tab === 1 ? <DashboardContent handleTab={(n)=>setTab(n)}/> : 
            tab===2?
            <ProfilePatient handleTab={()=>setTab(1)} /> :
            tab===3?
            <Talk/> :
            tab===4?
            <Index/> :
            tab===5?
            <Resources/>:
            tab===6?
            <Blog/>:
            <Challenge/>
          }
        
        </div>
      </div>
      <ToastContainer
            position="top-left"
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
  );
}

export default UserDashboard;
