import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import Candidate from "../../components/Candidate/Candidate";
import Company from "../../components/Company/Company";
import ReportDetails from "../../components/ReportDetails/ReportDetails";
import "./Wizard.css";

function Wizard(props) {
  let [report, setReport] = useState({
    id: 0,
    candidateId: 0,
    candidateName: "",
    companyId: 0,
    companyName: "",
    interviewDate:
      "Sun Aug 29 2021 09:55:42 GMT+0200 (Central European Summer Time)",
    phase: 1,
    status: true,
    note: "",
  });

  const testVal = 1;

  const wizardStep = function (step) {
    let output;
    if (step === 1) {
      output = <Candidate></Candidate>;
    } else if (step === 2) {
      output = <Company></Company>;
    } else if (step === 3) {
      output = <ReportDetails></ReportDetails>;
    }
    return output;
  };

  return (
    <>
      <AdminHeader></AdminHeader>
      <article className="wizard-container">
        <aside className="progress--side-bar">
          <section className="progress--steps">
            <div className={testVal >= 1 ? `step step-active` : `step`}>
              <span className="step--number"> 1</span>{" "}
              <span className="step--name">Select Candidate</span>
            </div>{" "}
            <div className={testVal >= 2 ? `step step-active` : `step`}>
              <span className="step--number"> 2</span>{" "}
              <span className="step--name">Select Company</span>
            </div>{" "}
            <div className={testVal >= 3 ? `step step-active` : `step`}>
              <span className="step--number"> 3</span>{" "}
              <span className="step--name">Fill Report Detail</span>
            </div>
          </section>
          <section className="progress--completed">
            <div className={testVal > 1 ? `` : `step-hidden`}>
              <div className="progress--detail-title">Candidate</div>
              <div className="progress--detail">John Doe</div>
            </div>{" "}
            <div className={testVal > 2 ? `` : `step-hidden`}>
              <div className="progress--detail-title">Company</div>
              <div className="progress--detail">ACME</div>
            </div>
          </section>
        </aside>
        <main className="wizard--panel">{wizardStep(testVal)}</main>
      </article>
    </>
  );
}

export default Wizard;
