import React, { useEffect } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./reportSuccess.css";

function ReportSucess(props) {
  useEffect(() => {
    let entry = {
      id: 10000000 + Math.round(Math.random() * 89999999),
      candidateId: props.candidateId,
      candidateName: props.candidateName,
      companyId: props.companyId,
      companyName: props.companyName,
      interviewDate: props.interviewDate,
      phase: props.phase,
      status: props.status,
      note: props.note,
    };
  }, []);
  return (
    <>
      <div className="report-success-container">
        <div className="report-success-box">
          <h2 className="report-success-message">Report Created!</h2>
        </div>
        <Link className="link--back" to="/home">
          Back
        </Link>
      </div>
    </>
  );
}

export default ReportSucess;
