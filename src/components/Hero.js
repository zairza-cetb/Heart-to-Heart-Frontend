import { useHistory } from "react-router-dom";
import Alone from "../Vectors/Alone-cuate.svg";
import React from 'react';

function Hero() {
    const history = useHistory();
  return (
    <section className="text-gray-600 bg-tertiary bg-opacity-25 body-font sm:px-2">
      <div className="container mx-auto flex px-5 md:space-x-7 py-28 md:flex-row flex-col items-center">
        <div className="lg:max-w-2xl md:max-w-xl lg:w-full md:w-1/2 w-5/6">
          <img src={Alone} h-36 w-24 alt="You" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font  mb-4 mt-6 font-medium text-gray-900">
            <span className="lg:text-xl text-md text-tertiary font-semibold">
              Hey there!
            </span>
            <h1 className="text-tertiary xl:text-6xl md:text-5xl text-3xl font-bold mt-2">
              Want to speak out how you're feeling?
            </h1>
            <br className="hidden lg:inline-block" />
            <span className="sm:text-2xl text-md text-gray-500">
              If there is no one to hear you, don't worry we are here for you.
            </span>
          </div>
          <p className="mb-8 leading-relaxed">
            They say speaking out makes one feel lighter. Vent out your
            feelings, emotions and thoughts in a safe space and feel a way lot
            more better.
          </p>
          <div className="flex justify-center">
            <button onClick={()=>history.push('/signup')} className="inline-flex text-white bg-tertiary border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded-full text-lg">
              Get started
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">
              Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
