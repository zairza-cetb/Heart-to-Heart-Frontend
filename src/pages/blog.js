import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import LottieAnimation from "../Lottie";
import background from "../Animations/background.json";
import backgroundAnimation from "../Animations/background-animation.json";
import Header from "../components/Header";

function Blog() {
  const mdParser = new MarkdownIt();
  function handleEditorChange({ html, text }) {
 
  }

  return (
    <div className="bg-tertiary min-h-screen">
      {/* <Header /> */}
      <div className="blog-editor">
        <div className="bg-tertiary flex justify-end" style={{ zIndex: -1 }}>
          <LottieAnimation lotti={background} height={400} width={900} />
        </div>
        <div
          className="flex flex-col justify-center items-center bg-tertiary"
          style={{ zIndex: 100 }}
        >
          <p className="text-tertiary p-2 font-bold text-2xl md:text-4xl mb-5 bg-light shadow-lg">
            PEN DOWN YOUR THOUGHTS
          </p>
          <MdEditor
            className="justify-center"
            style={{ height: "500px", width: "80%" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
          <button className="inline-flex text-tertiary font-semibold bg-primary border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded-full text-lg mt-5">
            Submit
          </button>
        </div>
        <div className="bg-tertiary flex justify-start" style={{ zIndex: -1 }}>
          <LottieAnimation
            lotti={backgroundAnimation}
            height={400}
            width={900}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
