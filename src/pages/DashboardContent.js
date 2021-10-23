import React from "react";
import FeelingBlue from "../Vectors/Feeling Blue-bro.svg";
import TrueFriends from "../Vectors/Solidarity-cuate.png";
// import Conversation from "../Vectors/Conversation-pana.png";
import Challenge from "../Vectors/ProblemSolving-bro.png";
import Chat from "../Vectors/ChatBot-pana.png";
import ChatBot from "./chat";
import CassettePlayer from "../Vectors/CassettePlayer-pana.png";
// import { useHistory } from "react-router-dom";

function DashboardContent(props) {
//   let history = useHistory();

//   const handleChange = () => {
//     props.setTab(5);
//   };


//   const handleBlog = () => {
//     props.setTab(6);
//   };

//   const handleTalk = () => {
//     props.setTab(3);
//   };

  const [showModal, setShowModal] = React.useState(false);

  const handleTab = props.handleTab;
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-4 mb-20">
        <div className="col-span-1">
          <div className="bg-white flex items-center rounded-full">
            <input
              className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Find therapists near you (Enter Location)"
            />

            <div className="p-2">
              <button className="bg-tertiary text-white rounded-full p-2 hover:shadow-lg focus:outline-none w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-4 mb-10">
        <div className="container bg-white p-5 md:p-8 rounded-lg flex justify-between col-span-4 lg:col-span-2 row-span-2">
          <div>
            <div className="">
              <h1 className="text-3xl md:text-5xl text-tertiary font-bold">
                Hello Abhipsa
              </h1>
              <h3 className="text-2xl md:text-xl mt-5">
                How are you feeling today?
              </h3>
              <div className="mt-20">
                <button
                  onClick={()=>handleTab(3)}
                  className="inline-flex text-white bg-tertiary border-0 py-2 px-4 
					  						focus:outline-none hover:bg-light hover:text-tertiary rounded-full text-sm font-bold"
                >
                  Tell us about your feelings
                </button>
              </div>
            </div>
          </div>
          <div className="md:block max-w-xs w-full mt-10">
            <img src={FeelingBlue} alt="Feeling Blue" />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 rounded-xl relative hover:bg-white hover:font-bold flex flex-col">
          <div>
            <div
              className="bg-white absolute inset-0 rounded-xl bg-cover bg-center z-0 hover:bg-white"
              style={{
                backgroundImage: `url(${CassettePlayer})`,
                backgroundSize: "cover",
              }}
            ></div>

            <div className="opacity-0 hover:opacity-90 rounded-xl duration-300 absolute inset-0 z-10 flex justify-center items-center bg-light text-4xl text-tertiary font-semibold p-2">
              <h4
                className="hover:cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={()=>handleTab(4)}
              >
                Listen to Music
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mt-2 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 rounded-xl relative max-w-full bg-white">
          <div>
            <div
              className="bg-white absolute rounded-xl inset-0 bg-cover bg-center z-0 hover:bg-white"
              style={{
                backgroundImage: `url(${TrueFriends})`,
                backgroundSize: "cover",
              }}
            ></div>

            <div className="opacity-0 rounded-xl hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-light text-4xl text-tertiary font-semibold p-2">
              <h4
                className="hover:cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={()=>handleTab(5)}
              >
                Find Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mt-2 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 rounded-xl relative max-w-full bg-white">
          <div>
            <div
              className="bg-white absolute rounded-xl inset-0 bg-cover bg-center z-0 hover:bg-white"
              style={{
                backgroundImage: `url(${Challenge})`,
                backgroundSize: "cover",
              }}
            ></div>

            <div onClick={()=>handleTab(7)} className="opacity-0 hover:opacity-90 duration-300 absolute rounded-xl inset-0 z-10 flex justify-center items-center bg-light text-4xl text-tertiary font-semibold p-4">
              <h4
                className="hover:cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                Take the 21 days challenge
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mt-2 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 rounded-xl relative max-w-full bg-white">
          <div>
            <div
              className="bg-white absolute rounded-xl inset-0 bg-cover bg-center z-0 hover:bg-white"
              style={{
                backgroundImage: `url(${Chat})`,
                backgroundSize: "cover",
                cursor: "pointer",
              }}
            ></div>

            <div className="opacity-0 hover:opacity-90 hover:cursor-pointer duration-300 absolute rounded-xl inset-0 z-10 flex justify-center items-center bg-light text-4xl text-tertiary font-semibold p-2">
              <h4
                className="hover:cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(true)}
              >
                Chat with Alex
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mt-2 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h4>
            </div>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <button
                          className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex justify-end"
                          type="button"
                          onClick={() => setShowModal(false)}
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <ChatBot />
                      </div>
                      {/*footer*/}
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-4 mb-20">
        <div className="bg-white rounded-lg flex flex-col container px-5 py-8 mx-auto items-center">
          <h4 className="text-2xl font-semibold text-tertiary hover:underline cursor-pointer">
            OUR THERAPISTS
          </h4>
          <br />
          <p className="text-lg text-center text-gray-700">
            Together, we will find the life-balance you have been looking for.
            We are passionate about helping others improve their mental and
            emotional wellness. We will help you develop coping skills and tools
            so you can change your thoughts, emotions, and behaviors.
          </p>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mt-2 text-tertiary animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="bg-white rounded-lg">
          <div className="bg-white rounded-lg flex flex-col container px-5 py-8 mx-auto items-center">
            <h4
              className="text-2xl font-semibold text-tertiary hover:underline text-center cursor-pointer"
              onClick={()=>handleTab(6)}
            >
              PEN DOWN YOUR THOUGHTS
            </h4>
            <br />
            <p className="text-lg text-center text-gray-700">
              Writing about your struggles and your share of ups and down will
              not only give you perspective but also inspire and motivate others
              out there that may be going through the same struggles day in and
              day out without knowing that it will get better.
            </p>
            <br />
            <svg
            onClick={()=>handleTab(6)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mt-2 text-tertiary animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="bg-white rounded-lg flex flex-col container px-5 py-8 mx-auto items-center">
            <h4
              className="text-2xl font-semibold text-tertiary hover:underline text-center cursor-pointer"
              onClick={()=>handleTab(3)}
            >
              CHECK YOUR EMOTIONAL CURVE
            </h4>
            <br />
            <p className="text-lg text-center text-gray-700">
              Emotional Curve is our ability to recognize, understand, and
              regulate our emotions and to respond to those emotions in
              constructive ways that allow us to communicate, empathize with
              others, and overcome challenges. In other words, it is being tuned
              into our emotional world and honing the ability to manage our
              emotions before our emotions manage us.
            </p>
            <br />
            <svg
               onClick={()=>handleTab(3)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mt-2 text-tertiary animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
