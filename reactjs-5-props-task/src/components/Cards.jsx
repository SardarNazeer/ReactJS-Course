import React from "react";

const Cards = (props) => {
  return (
      <div className="card">
        <p>{props.salary}</p>
        <img
          src={props.image}
        />
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
        <div className="skills">
          <a>{props.skills[0]}</a>
          <a>{props.skills[1]}</a>
          <a>{props.skills[2]}</a>
          <a>{props.skills[3]}</a>
        </div>

        <p className="bio">{props.bio}</p>
        <button>View Profile</button>
      </div>
  );
};

export default Cards;
