import { useState } from "react";
import Exam1 from "./Exam1";
import Exam2 from "./Exam2";
import Exam3 from "./Exam3";
import Exam5 from "./Exam5";
import Exam4 from "./Exam4";

function App() {
  const [count, setCount] = useState({
    exam1: false,
    exam2: false,
    exam3: false,
    exam4: false,
    exam5: false,
  });

  return (
    <div className="min-h-screen gap-10">
      <div>
        <h1
          className="uppercase text-3xl tracking-widest font-semibold cursor-pointer"
          onClick={() =>
            setCount((prev) => {
              return { ...prev, exam1: !prev.exam1 };
            })
          }
        >
          Exam 1.1
        </h1>
        {count.exam1 ? <Exam1 /> : ""}
      </div>
      <div>
        <h1
          className="uppercase text-3xl tracking-widest font-semibold cursor-pointer"
          onClick={() =>
            setCount((prev) => {
              return { ...prev, exam2: !prev.exam2 };
            })
          }
        >
          Exam 1.2
        </h1>
        {count.exam2 ? <Exam2 /> : ""}
      </div>
      <div>
        <h1
          className="uppercase text-3xl tracking-widest font-semibold cursor-pointer"
          onClick={() =>
            setCount((prev) => {
              return { ...prev, exam3: !prev.exam3 };
            })
          }
        >
          Exam 1.3
        </h1>
        {count.exam3 ? <Exam3 /> : ""}
      </div>
      <div>
        <h1
          className="uppercase text-3xl tracking-widest font-semibold cursor-pointer"
          onClick={() =>
            setCount((prev) => {
              return { ...prev, exam4: !prev.exam4 };
            })
          }
        >
          Exam 1.4
        </h1>
        {count.exam4 ? <Exam4 /> : ""}
      </div>
      <div>
        <h1
          className="uppercase text-3xl tracking-widest font-semibold cursor-pointer"
          onClick={() =>
            setCount((prev) => {
              return { ...prev, exam5: !prev.exam5 };
            })
          }
        >
          Exam 1.5
        </h1>
        {count.exam5 ? <Exam5 /> : ""}
      </div>
    </div>
  );
}

export default App;
