import React from 'react'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'

const App = () => {

  let users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Frontend Developer passionate about React and UI design.",
    tag: "Frontend",
    color: "blue",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Backend Engineer who loves Node.js and databases.",
    tag: "Backend",
    color: "black",
  },
  {
    img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Full Stack Developer with MERN stack experience.",
    tag: "Full Stack",
    color: "red",
  },
];


  return (
    <div>
      <Page1 users={users}/>
      <Page2/>
    </div>
  )
}

export default App
