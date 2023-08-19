import React, { useState } from "react";

const Exam2 = () => {
  const [accordian, setAccordian] = useState(false);
  const [accordian2, setAccordian2] = useState(false);
  return (
    <div className="mt-4 cursor-pointer my-4 py-4 border-b flex flex-col pl-4">
      <div className="flex-1">
        {" "}
        <h1
          className="w-28 h-10 text-white border hover:text-slate-500 border-gray-500 p-2 text-center rounded-md"
          onClick={() => setAccordian(!accordian)}
        >
          Lorem
        </h1>
        {accordian ? (
          <p className="text-white relative">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            fugiat.
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex-1">
        {" "}
        <h1
          className="w-28 h-10 text-white border hover:text-slate-500 border-gray-500 p-2 text-center rounded-md"
          onClick={() => setAccordian2(!accordian2)}
        >
          Lorem
        </h1>
        {accordian2 ? (
          <p className="text-white relative">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            fugiat.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Exam2;
