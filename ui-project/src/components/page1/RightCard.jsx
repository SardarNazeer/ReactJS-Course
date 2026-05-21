import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro}/>
    </div>
  );
};

export default RightCard;
