import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerPatient } from "../api/authentication";
import { patientRegisterAction } from "../redux/actions/userAuth";

const ProfilePatient = ({handleTab}) => {
    const currentUser = useSelector(state => state.authReducer);
    const patientProfile = useSelector(state => state.patientReducer);
    const dispatch = useDispatch();
    const [name,setName]=useState("");
    const [isUpdated,setIsUpdated] = useState(false)
    const [phoneno,setPhoneno]=useState("");
    const [dob,setDob]=useState("");
    const [city,setCity]=useState("");
    const [pincode,setPincode]=useState("");
    const [age,setAge]=useState(0);
    const [clicked,setClicked]=useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setClicked(true)
        dispatch(patientRegisterAction({name,email:currentUser.email,phoneno,dob,city,pincode,age}))
    }
    useEffect(() => {
      if(currentUser.isRegistered)
      {
        setIsUpdated(true)
        setName(patientProfile.name)
        setPhoneno(patientProfile.phoneno)
        setAge(patientProfile.age)
        setCity(patientProfile.city)
        setDob(patientProfile.dob)
        setPincode(patientProfile.pincode)
      }
      else
      setIsUpdated(false)
    },[]);

    useEffect(()=>{
      function callback(){
        // if(patientProfile.isLoading)
        // console.log("loading")
        if(patientProfile.updateSuccess)
        {
          setName(patientProfile.name)
          setPhoneno(patientProfile.phoneno)
          setAge(patientProfile.age)
          setCity(patientProfile.city)
          setDob(patientProfile.dob)
          setPincode(patientProfile.pincode)

          if(!isUpdated)
          {
            setClicked(false)
            setTimeout(()=>handleTab(),2000);
          }
        }
        else if(!patientProfile.updateSuccess && patientProfile.errorMessage)
        {
          // console.log(patientProfile.errorMessage)
        }
      };
      if(clicked)
      callback();
    },[patientProfile])

  return (
    <div className="pt-10 px-5 pb-5">
      <h1 className="text-3xl font-bold text-white">Profile</h1>
      <div className="mt-5 shadow-xl py-10 px-5 rounded-md bg-light ">
        <form action="POST" onSubmit={handleSubmit} className=" grid grid-cols-2 gap-10">
          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="first-name"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-primary block w-full border-gray-300 rounded-md"
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              value={currentUser.email}
              required
              disabled
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-primary block w-full border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="phone"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="phone"
              value={phoneno}
              onChange={(e)=>setPhoneno(e.target.value)}
              required
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-primary block w-full  border-gray-300 rounded-md"
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="dob"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              autoComplete="dob"
              value={dob}
              onChange={(e)=>setDob(e.target.value)}
              required
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-white block w-full  border-gray-300 rounded-md"
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="age"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              autoComplete="age"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              required
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-primary block w-full  border-gray-300 rounded-md"
            />
          </div>

          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="city"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="city"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              required
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-primary block w-full border-gray-300 rounded-md"
            />
          </div>
          <div className="md:col-span-1 col-span-2">
            <label
              htmlFor="pincode"
              className="block text-md font-medium text-gray-700 text-xl"
            >
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              autoComplete="pincode"
              value={pincode}
              onChange={(e)=>setPincode(e.target.value)}
              required
              className="mt-1 p-2 text-md text-tertiary focus:outline-none focus:ring-primary focus:border-primary block w-full border-gray-300 rounded-md"
            />
          </div>
          <div className="md:col-span-1 col-span-2 mt-auto ml-auto">
            {
              currentUser.isRegistered?
              <button
                className="bg-tertiary font-bold px-6 py-3 rounded-full hover:shadow-xl transition duration-200 text-white"
                type="submit"
                >
                Update
              </button>
              :
              <button
                className="bg-tertiary font-bold px-6 py-3 rounded-full hover:shadow-xl transition duration-200 text-white"
                type="submit"
                >
                Register
              </button>
            }
              
          </div>
          
        </form>
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
};

export default ProfilePatient;
