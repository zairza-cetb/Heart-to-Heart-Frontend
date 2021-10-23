import React, { useEffect, useState } from 'react'
import LottieAnimation from '../Lottie'
import backgroundAnimation from "../Animations/background-animation.json";
import { useDispatch, useSelector } from 'react-redux';
import { taskList } from '../tasks';
import { postChallengeAction } from '../redux/actions/challengeAction';
const Challenge = () => {
    const [isClicked,setClicked] = useState(false)
    const [isCompleted,setCompleted] = useState(false)
    const [todayTask,setTodayTask] = useState("")
    const profilePatient = useSelector(state => state.patientReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        var todayDate = new Date().toISOString().slice(0, 10);
        var diff=0;
        if(!profilePatient.startDate)
        diff=0;
        else
        diff = Math.floor((Date.parse(todayDate) - Date.parse(profilePatient.startDate)) / 86400000);

        if(diff+1===profilePatient.daysCompleted)
        {
            setCompleted(true);
            setTodayTask(taskList[diff]);
        }
        if(profilePatient.name)
        {
            let t="";
            if(profilePatient.daysCompleted>0)
            {
                t = taskList[parseInt(profilePatient.daysCompleted)-1];
                setTodayTask(t);
                setClicked(true);
            }
            else
            setClicked(false);
        }
        
    },[profilePatient,isCompleted])

    useEffect(()=>{
        if(isClicked && profilePatient.daysCompleted===0)
        {
            setTodayTask(taskList[0]);
        }
    },[isClicked])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(postChallengeAction(profilePatient.email))

        setCompleted(true)
        
    }

    if(isClicked)
    {
        return (
            <div className="grid grid-cols-7 gap-4 h-screen">
                <div className="col-span-7 md:col-span-4">
                   
                    <div className="block bg-secondary text-left pl-2 md:mt-5 p-5 flex items-center justify-between rounded-r-full">
                        <span className="text-3xl">
                            21 days Challenge
                        </span>
                        <span className={`rounded-full p-1 font-bold ${profilePatient.daysCompleted===21?'text-green-400':'text-blue-400'}`}>
                            {
                                profilePatient.daysCompleted!==21?
                                'Ongoing':
                                'Completed'
                            }
                        </span>
                    </div>
                    {
                        isCompleted?
                        <div className="bg-white ml-5 mt-5 p-5 ">
                            <div className="text-2xl  text-tertiary ">
                                Your Today's Task
                            </div>
                            <div className="mt-5">
                                <span className="text-2xl block">To do</span>
                                <div className="text-xl mt-5 text-gray-600 p-5 bg-gray-200 rounded-md">{todayTask.task}</div>
                            </div>
                            <div className="mt-5">
                            <div className="text-xl mt-5 text-gray-600 p-5 bg-green-200 rounded-md">
                                    Your Task is Completed for today
                                </div>
                            </div>
                        </div>
                        :
                        (<div className="bg-white ml-5 mt-5 p-5 ">
                            <div className="text-2xl  text-tertiary ">
                                Your Today's Task
                            </div>
                            <div className="mt-5">
                                <span className="text-2xl block">To do</span>
                                <div className="text-xl mt-5 text-gray-600 p-5 bg-gray-200 rounded-md">{todayTask.task}</div>
                            </div>
                            <div className="mt-5">
                                <span className="text-2xl block">How will this improve ?</span>
                                <div className="text-xl mt-5 text-gray-600 p-5 bg-gray-200 rounded-md">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur dicta, atque cumque odit quos est odio! Facere, enim. Ad illum nesciunt blanditiis quia repudiandae quidem veniam! Enim, ad voluptatem.
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="text-xl block">If you have completed,then enter Done</div>
                                <button onClick={handleSubmit} className="inline-flex text-primary font-semibold bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded-full text-lg mt-5">
                                    Done
                                </button>
                            </div>
                        </div>)
                    } 
                    
                    
    
                </div>
                
            </div>
        )
    }
    else
    return (
        <div className="w-full h-screen overflow-y-hidden">
            <div className="block text-center text-2xl md:text-3xl font-bold mt-8 pt-5 mb-8 text-primary">
                Welcome to the 21 days challenge
            </div>
            <div className="block w-11/12 bg-white py-5 pr-10 pl-5  rounded-r-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi cumque nobis aliquid repudiandae facilis accusamus veritatis repellendus magnam. Hic tempore magni laboriosam explicabo, dolorem impedit libero cumque natus molestiae.
            </div>
            <div className="block w-11/12 bg-white py-5 pl-10 mt-10 rounded-l-3xl ml-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus tenetur sequi cum harum praesentium nemo esse. Quam, molestiae qui. Itaque earum voluptate commodi et recusandae voluptates mollitia aspernatur fugiat inventore?
            </div>
            <div className="flex items-center justify-center" onClick={e => setClicked(true)}>
                <button className="inline-flex text-tertiary font-semibold bg-primary border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded-full text-lg mt-5">
                    Start the challenge
                </button>
            </div>
            <div className="hidden md:flex justify-start mt-4" style={{ zIndex: -1 }}>
                <LottieAnimation
                    lotti={backgroundAnimation}
                    height={400}
                    width={900}
                />
            </div>
            
        </div>

    )
}

export default Challenge
