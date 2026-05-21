import React from 'react'
import RightText from './RightText'
import LeftText from './LeftText'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 flex items-center gap-10 h-[90vh] px-18'>
      <LeftText/>
      <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content
