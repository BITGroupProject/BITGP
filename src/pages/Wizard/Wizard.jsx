import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import Candidate from "../../components/Candidate/Candidate";
import Company from "../../components/Company/Company";
import ReportDetails from "../../components/ReportDetails/ReportDetails";
import ReportSuccess from "../../components/ReportSucess/ReportSucess";
import "./Wizard.css";

function Wizard(props) {
  const [step, setStep] = useState(1);
  const [activeCandidate, setActiveCandidate] = useState();
  const [activeCompany, setActiveCompany] = useState();
  const [candidateId, setCandidateId] = useState();
  const [candidateName, setCandidateName] = useState();
  const [companyId, setCompanyId] = useState();
  const [companyName, setCompanyName] = useState();
  const [interviewDate, setInterviewDate] = useState();
  const [phase, setPhase] = useState(`CV`);
  const [status, setStatus] = useState(false);
  const [note, setNote] = useState(``);

  const stepNext = function () {
    setStep(step + 1);
  };

  const stepPrev = function () {
    setStep(step - 1);
  };

  const wizardStep = function (step) {
    let output;
    if (step === 1) {
      output = (
        <Candidate
          next={stepNext}
          prev={stepPrev}
          step={step}
          activeCandidate={activeCandidate}
          setActiveCandidate={setActiveCandidate}
          setCandidateId={setCandidateId}
          setCandidateName={setCandidateName}
        ></Candidate>
      );
    } else if (step === 2) {
      output = (
        <Company
          next={stepNext}
          prev={stepPrev}
          step={step}
          activeCompany={activeCompany}
          setActiveCompany={setActiveCompany}
          setCompanyId={setCompanyId}
          setCompanyName={setCompanyName}
        ></Company>
      );
    } else if (step === 3) {
      output = (
        <ReportDetails
          next={stepNext}
          prev={stepPrev}
          step={step}
          interviewDate={interviewDate}
          setInterviewDate={setInterviewDate}
          setPhase={setPhase}
          setStatus={setStatus}
          setNote={setNote}
        ></ReportDetails>
      );
    } else if (step === 4) {
      output = (
        <>
          <ReportSuccess
            candidateId={candidateId}
            candidateName={candidateName}
            companyId={companyId}
            companyName={companyName}
            interviewDate={interviewDate}
            phase={phase}
            status={status}
            note={note}
          ></ReportSuccess>
        </>
      );
    }
    return output;
  };

  return (
    <>
      <AdminHeader></AdminHeader>
      <article className="wizard-container">
        <aside className="progress--side-bar">
          <section className="progress--steps">
            <div className={step >= 1 ? `step step-active` : `step`}>
              <span className="step--number"> 1</span>{" "}
              <span className="step--name">Select Candidate</span>
            </div>{" "}
            <div className={step >= 2 ? `step step-active` : `step`}>
              <span className="step--number"> 2</span>{" "}
              <span className="step--name">Select Company</span>
            </div>{" "}
            <div className={step >= 3 ? `step step-active` : `step`}>
              <span className="step--number"> 3</span>{" "}
              <span className="step--name">Fill Report Detail</span>
            </div>
          </section>
          <section className="progress--completed">
            <div className={candidateName ? `` : `step-hidden`}>
              <div className="progress--detail-title">Candidate</div>
              <div className="progress--detail">{candidateName}</div>
            </div>{" "}
            <div className={companyName ? `` : `step-hidden`}>
              <div className="progress--detail-title">Company</div>
              <div className="progress--detail">{companyName}</div>
            </div>
          </section>
        </aside>
        <main className="wizard--panel">{wizardStep(step)}</main>
      </article>
    </>
  );
}

export default Wizard;
