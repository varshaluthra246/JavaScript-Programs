import React, { useState } from "react";
import "./EmployeeForm.css"; // Import CSS file for styles

const EmployeeForm = () => {
  const [activeTab, setActiveTab] = useState("Resume");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="employee-form-container">
      <div className="employee-header">
        <div className="employee-photo">
          <img src="https://via.placeholder.com/100" alt="Employee" />
        </div>
        <div className="employee-info">
          <h1>Employee's Name</h1>
          <h3>Job Position</h3>
          <div className="employee-tags">Tags</div>
        </div>
      </div>

      <div className="employee-details">
        <div>
          <strong>Work Mobile:</strong> <span>Not provided</span>
        </div>
        <div>
          <strong>Work Phone:</strong> <span>Not provided</span>
        </div>
        <div>
          <strong>Work Email:</strong> <span>Not provided</span>
        </div>
        <div>
          <strong>Department:</strong> <span>Not provided</span>
        </div>
        <div>
          <strong>Job Position:</strong> <span>Not provided</span>
        </div>
        <div>
          <strong>Manager:</strong> <span>Not provided</span>
        </div>
        <div>
          <strong>Coach:</strong> <span>Not provided</span>
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "Resume" ? "active" : ""}
          onClick={() => handleTabChange("Resume")}
        >
          Resume
        </button>
        <button
          className={activeTab === "Work Information" ? "active" : ""}
          onClick={() => handleTabChange("Work Information")}
        >
          Work Information
        </button>
        <button
          className={activeTab === "Private Information" ? "active" : ""}
          onClick={() => handleTabChange("Private Information")}
        >
          Private Information
        </button>
        <button
          className={activeTab === "HR Settings" ? "active" : ""}
          onClick={() => handleTabChange("HR Settings")}
        >
          HR Settings
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "Resume" && (
          <div className="resume">
            <h4>Resume</h4>
            <button>Create a new entry</button>
          </div>
        )}
        {activeTab === "Work Information" && <p>Work Information content...</p>}
        {activeTab === "Private Information" && <p>Private Information content...</p>}
        {activeTab === "HR Settings" && <p>HR Settings content...</p>}
      </div>

      <div className="skills-section">
        <h4>Skills</h4>
        <button>Create a new entry</button>
      </div>
    </div>
  );
};

export default EmployeeForm;
