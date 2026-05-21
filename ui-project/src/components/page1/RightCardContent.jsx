import React from 'react'

const RightCardContent = (props) => {
  return (
          <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-white text-2xl rounded-full flex justify-center items-center font-bold h-12 w-12">
          {props.id+1}
        </h2>
        <div>
          <p className="text-lg leading-normal mb-8 text-white">
            {props.intro}
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-3 rounded-full">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-4 py-3 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
