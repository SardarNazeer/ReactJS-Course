import React from "react";
import { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    setTitle('');
    setDetail('');
  };

  const [title,setTitle] = useState('');
  const [detail,setDetail] = useState('');

  const [task,setTask] = useState([]);


  return (
    <div className="h-screen lg:flex bg-black text-white">

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col lg:w-1/2 items-start gap-5  p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          className="px-5 w-full font-medium outline-none py-2 border-2 rounded"
          placeholder="Enter Notes Heading"
        />


        <textarea
          className="px-5 py-2 font-medium flex items-start flex-row w-full h-20 border-2 rounded"
          placeholder="Enter Details"
          value={detail}
          onChange={(e) =>{
            setDetail(e.target.value)
          }}
        ></textarea>

        <button className="active:bg-gray-400 bg-white w-full text-black px-5 py-2 rounded">
          Add Note
        </button>

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">

        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
          <div className="h-50 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
