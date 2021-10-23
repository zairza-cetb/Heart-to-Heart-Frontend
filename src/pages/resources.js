import React from "react";
import Anxiety from "../Vectors/Anxiety-bro.png";
import MentalHealth from "../Vectors/MentalHealth-pana.png";
import Schizophrenia from "../Vectors/Schizophrenia-amico.png";

function Resources() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1">
        <div className="border-b-4 border-secondary">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary pb-2">
            WatchList
          </h1>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-4 mt-10 mb-20">
        <div className="bg-white rounded-lg flex flex-col container pb-8 mx-auto items-center">
          <img src={Anxiety} alt="" className="rounded-t-lg" alt="YouTube1" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-tertiary">
              How to Cope Up with Anxiety
            </h2>
            <a
              href="https://www.youtube.com/watch?v=WWloIAQpMcQ"
              className="text-purple-600 hover:text-purple-500 underline text-sm"
            >
              Watch Now 👉
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg flex flex-col container pb-8 mx-auto items-center">
          <img src={MentalHealth} alt="" className="rounded-t-lg" alt="YouTube1" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-tertiary">
              How to improve your Mental Health
            </h2>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-500 underline text-sm"
            >
              Watch Now 👉
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg flex flex-col container pb-8 mx-auto items-center">
          <img src={Schizophrenia} alt="" className="rounded-t-lg" alt="YouTube1" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-tertiary">
              What They Don't Tell You About Mental Illness
            </h2>
            <a
              href="https://www.youtube.com/watch?v=ieXB-BGxYwg"
              className="text-purple-600 hover:text-purple-500 underline text-sm"
            >
              Watch Now 👉
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1">
        <div className="border-b-4 border-secondary">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary pb-2">
            India Helpline Numbers
          </h1>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-4 mt-10 mb-20">
        <div className="bg-primary rounded-lg flex flex-col container p-8 mx-auto items-center">
          <h1 className="text-tertiary text-2xl font-semibold">Sangath</h1>
          <p className="text-tertiary text-lg mt-2 text-center">
            Sangath is a not-for-profit organisation working in Goa, India for
            24 years to make mental health services accessible and affordable
          </p>

          <div className="flex flex-col mt-4">
            <div className="flex justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-tertiary text-lg font-bold"> 011-41198666</p>
            </div>
            <div className="flex justify-evenly mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-tertiary text-lg font-bold"> 10 AM - 4 PM</p>
            </div>
            <div className="flex justify-evenly mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-tertiary text-lg font-bold ml-2">
                {" "}
                Hindi, English, <br />
                Marathi, Konkani
              </p>
            </div>
            <a
              href="www.sangath.in"
              className="text-purple-600 text-center mt-6 hover:text-purple-500 underline text-sm"
            >
              Website 👉
            </a>
          </div>
        </div>
        <div className="bg-primary rounded-lg flex flex-col container p-8 mx-auto items-center">
          <h1 className="text-tertiary text-2xl font-semibold">
            Mitram Foundation
          </h1>
          <p className="text-tertiary text-lg mt-2 text-center">
            Mitram Foundation is a suicide prevention helpline that aims to
            offer emotional support to those going through a crisis in their
            lives
          </p>

          <div className="flex flex-col mt-4">
            <div className="flex justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-tertiary text-lg font-bold">
                {" "}
                +91 901 9708133
              </p>
            </div>
            <div className="flex justify-evenly mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-tertiary text-lg font-bold"> 10 AM - 4 PM</p>
            </div>
            <div className="flex justify-evenly mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-tertiary text-lg font-bold ml-2">
                {" "}
                Hindi, English
              </p>
            </div>
            <a
              href="https://www.mitramfoundation.com"
              className="text-purple-600 text-center mt-6 hover:text-purple-500 underline text-sm"
            >
              Website 👉
            </a>
          </div>
        </div>
        <div className="bg-primary rounded-lg flex flex-col container p-8 mx-auto items-center">
          <h1 className="text-tertiary text-2xl font-semibold">
            Connecting Trust
          </h1>
          <p className="text-tertiary text-lg mt-2 text-center">
            Connecting NGO is a non-judgemental, non-advisory, confidential and
            anonymous space for those feeling low, distressed and/or suicidal.
          </p>

          <div className="flex flex-col mt-4">
            <div className="flex justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-tertiary text-lg font-bold"> +91-9922001122</p>
            </div>
            <div className="flex justify-evenly mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-tertiary text-lg font-bold">
                {" "}
                12:00 PM - 08:00 PM
              </p>
            </div>
            <div className="flex justify-evenly mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-tertiary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-tertiary text-lg font-bold ml-2">
                {" "}
                Hindi, English
              </p>
            </div>
            <a
              href="www.coonectingtrust.com"
              className="text-purple-600 text-center mt-6 hover:text-purple-500 underline text-sm"
            >
              Website 👉
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
