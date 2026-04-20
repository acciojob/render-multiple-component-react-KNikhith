import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   const projects = [
    {
      name: "AI Code Reviewer",
      description: "Automatically reviews code and suggests improvements."
    },
    {
      name: "Smart Expense Tracker",
      description: "Tracks and categorizes expenses intelligently."
    },
    {
      name: "Real-time Chat App",
      description: "Chat application with live messaging support."
    }
  ];
  return (
    <div className="ns-wrapper">
      {projects.map((project,index)=>(
        <div key={index}>
          <h1 data-ns-test="project-name">
            {project.name}
          </h1>
          <h6 data-ns-test="project-description">
            {project.description}
             </h6>
          </div>
      ))}
    </div>
  )
}


export default App;
