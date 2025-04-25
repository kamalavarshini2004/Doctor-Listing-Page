import React from "react";
import "./App.css";
import DoctorList from "./components/DoctorList"; // Assuming DoctorList is in the 'components' folder

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Doctor Listing</h1>
      </header>
      <DoctorList />
    </div>
  );
};

export default App;
