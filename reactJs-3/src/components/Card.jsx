import React from 'react'

const Card = (props) => {
  return (
       <div className="parent">
      <div className="card">
        <img
        src={props.img}          alt=""
        />
        <h1>{props.user},{props.age}</h1>
        <p>Hello World, I am a software engineer.</p>
        <button>View Profile</button>
      </div>

      
    </div>
  )
}

export default Card
