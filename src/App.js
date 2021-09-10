import Historia from "./components/Historia";
import React from "react";

// No lo hago clase ya que no necesito pasarle estados aca, asi que no hace falta
export default class App extends React.Component{
  
  render(){
    return (
      <div className="story">
        
        <Historia/>    

      </div>
    );

  }
}


