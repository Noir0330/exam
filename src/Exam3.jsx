import React from "react";
import "./exam3.css";

const Exam3 = () => {
  return (
    <div>
      <h1>Slider</h1>
      <div className="slider w-32 h-32 flex my-4 border-b">
        <div className="slider-children bg-green-500 w-full h-full"></div>
        <div className="slider-children  bg-red-500 w-full h-full"></div>
        <div className="slider-children  bg-blue-500 w-full h-full"></div>
        <div className="slider-children  bg-yellow w-full h-full"></div>
        <div className="slider-children  bg-violet-500 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Exam3;
