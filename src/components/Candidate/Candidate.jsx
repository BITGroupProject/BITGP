import React from "react";
import Search from "../Search/Search";
import WizardCard from "../WizardCard/WizardCard";
import Button from "../Button/Button";
import { candidates } from "../../data";
import "./Candidate.css";

function Candidate(props) {
  return (
    <>
      <div className="candidate-search-container">
        <Search></Search>
      </div>
      <section className="candidate-container">
        {candidates.map((el, i) => {
          return (
            <WizardCard
              key={`candidate-` + i}
              id={i + 1}
              data={el}
              activeCandidate={props.activeCandidate}
              setActiveCandidate={props.setActiveCandidate}
              setCandidateId={props.setCandidateId}
              setCandidateName={props.setCandidateName}
            ></WizardCard>
          );
        })}
      </section>
      <div className="candidate--next-prev">
        <div className={props.activeCandidate ? `` : `btn-hidden`}>
          <Button do={props.next} name="Next"></Button>
        </div>
      </div>
    </>
  );
}

export default Candidate;
