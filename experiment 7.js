import React from "react";
import "./experiment7.css";

function Student(props) {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student
        name="Apoorva"
        course="B.Tech CSE"
        marks="92"
      />

      <Student
        name="Rahul"
        course="B.Tech IT"
        marks="85"
      />

      <Student
        name="Priya"
        course="B.Tech AIML"
        marks="88"
      />
    </div>
  );
}

export default App;