import React from 'react'
import RightCard from './RightCard'

const RightText = (props) => {
  return (
    <div className='h-full flex overflow-x-auto rounded-4xl flex-nowrap gap-10 w-2/3'>
      {props.users.map(function(elem,idx) {
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
    </div>
  )
}

export default RightText
