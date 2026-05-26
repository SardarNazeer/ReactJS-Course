import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    // console.log(title,detail)

    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-5 w-full font-medium outline-none py-2 border-2 rounded"
          placeholder="Enter Notes Heading"
        />

        <textarea
          className="px-5 py-2 font-medium flex items-start flex-row w-full h-20 border-2 rounded"
          placeholder="Enter Details"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        ></textarea>

        <button className="active:bg-gray-400 bg-white w-full text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start  relative
                 h-50 w-40 rounded-2xl text-black pt-9 pb-4 px-4 bg-cover 
                 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8UoY1H5Gz_7dJ6XGuqq14-48n4YUGbcKgQ&s')]"
              >
                <h2 onClick={()=>{
                  deleteNote(idx)
                }} className="absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs">
                  <X size={16} strokeWidth={2.75} />
                </h2>
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-medium text-gray-500">
                  {elem.detail}
                </p>
                <button
                  onClick={()=>{deleteNote(idx)}}
                  className="bg-red-600 font-bold w-full cursor-pointer py-1 text-xs rounded text-white active:scale-95"
                >
                  Delete Notes
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
