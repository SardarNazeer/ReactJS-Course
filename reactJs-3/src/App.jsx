import React from "react";
import "./index.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Sardar Nazeer"
        age={23}
        img="https://plus.unsplash.com/premium_photo-1669357657874-34944fa0be68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Ali Raza"
        age={20}
        img="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
