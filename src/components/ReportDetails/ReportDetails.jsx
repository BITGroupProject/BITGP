import React from "react";
import "./ReportDetails.css";
import Button from "../Button/Button";

function ReportDetails() {
  return (
    <>
      <section>
        <div className="report-input-fields">
          <div className="report-input-container">
            <span className="report-input-label">Interview Date:</span>
            <input type="date"></input>
          </div>{" "}
          <div className="report-input-container">
            <span className="report-input-label">Phase:</span>
            <select id="phase">
              <option value="1">CV</option>
              <option value="2">HR</option>
              <option value="3">Tech</option>
              <option value="4">Final</option>
            </select>{" "}
          </div>{" "}
          <div className="report-input-container">
            <span className="report-input-label">Status:</span>
            <select id="status">
              <option value={true}>Passed</option>
              <option value={false}>Declined</option>
            </select>{" "}
          </div>{" "}
        </div>
        <div className="report-input-comment">
          <span className="report-input-label">Notes:</span>
          <textarea className="report-textarea"></textarea>
        </div>
      </section>
      <div className="company--next-prev">
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </>
  );
}

export default ReportDetails;
