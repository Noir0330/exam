import React, { useState } from "react";

const Exam4 = () => {
  const [inputValues, setInputValues] = useState({ name: "", password: "" });
  const [welcome, setWelcome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((inputValues.name === "duk", inputValues.password === "duk123")) {
      setWelcome(true);
    }
  };

  return (
    <div className="border px-6 py-2 mt-4 w-1/3 my-4 border-b">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <p className="text-sm my-2 text-center">name: duk, password: duk123</p>
        <label className="block text-center">Form</label>
        <input
          type="text"
          placeholder="Dulguun"
          className="text-black p-2"
          onChange={(e) =>
            setInputValues({
              ...inputValues,
              name: e.target.value,
            })
          }
        />
        <br />
        <input
          type="password"
          className="text-black p-2"
          placeholder="Dulguunii password"
          onChange={(e) =>
            setInputValues({
              ...inputValues,
              password: e.target.value,
            })
          }
        />
        <br />
        <button className="p-1 w-1/2 self-center border rounded-md hover:text-gray-300 ">
          Submit
        </button>
      </form>
      <div
        className={
          welcome
            ? "py-6 px-4 border mt-4 flex flex-col justify-center items-center"
            : null
        }
      >
        <h1 className={welcome ? "block text-3xl text " : "hidden"}>
          Welcome to Homepage
        </h1>
        <h2
          className={
            welcome
              ? "block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-16 px-2 py-1 self-center mt-2 rounded-xs"
              : "hidden"
          }
          onClick={() => setWelcome(false)}
        >
          Logout
        </h2>
      </div>
    </div>
  );
};

export default Exam4;
