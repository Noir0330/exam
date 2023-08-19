import React, { useState } from "react";

const Exam5 = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col justify-center items-start w-1/2 pl-4 pt-4">
      <button className="py-1 px-2 border" onClick={() => setModal(!modal)}>
        Modal
      </button>
      <div
        className={
          modal
            ? "w-32 h-32 bg-indigo-500 mt-5 flex items-center justify-center"
            : "hidden"
        }
      >
        IT IS MODAL
      </div>
    </div>
  );
};

export default Exam5;
