import React from "react";
import { BsTwitter, BsInstagram, BsFacebook, BsHeart } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-white sm:px-20 shadow-lg bg-tertiary">
      <div className="container pt-8">
        <div className="">
          <a className="flex  items-center justify-center text-white" href="/">
            <BsHeart strokeWidth={1} size={"1.2rem"} />
            <span
              className="ml-3 text-xl"
              style={{ fontSize: "25px", fontWeight: "600" }}
            >
              Heart-To-Heart
            </span>
          </a>
        </div>
        <div>
          <p className="flex items-center justify-center text-white py-1">
            Don't worry, we are here for you.
          </p>
        </div>

        <div className="flex items-center justify-center py-5">
          <span className="inline-flex justify-center ">
            <a className="text-white px-1" href="/">
              <BsFacebook size={"1.3rem"} />
            </a>
            <a className="ml-3 text-white px-1" href="/">
              <BsTwitter size={"1.3rem"} />
            </a>
            <a className="ml-3 text-white px-1" href="/">
              <BsInstagram size={"1.3rem"} />
            </a>
          </span>
        </div>
        <div>
          <p className="flex items-center justify-center text-sm text-white pt-5 pb-2">
            Copyright ©Heart-To-Heart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
