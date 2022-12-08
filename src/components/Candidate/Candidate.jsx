import React, { useState, useContext } from "react";
import WizardCard from "../WizardCard/WizardCard";
import Button from "../Button/Button";

import Search from "../../components/Search/Search";
import SearchError from "../../components/SearchError/SearchError";
import { applicationContext } from "../../context";

import "./Candidate.css";

function Candidate(props) {
  const [inputValue, setInputValue] = useState("");
  const { allCandidates } = useContext(applicationContext);

  const searchCandidate = allCandidates.filter((e) => {
    const candidateName = e.name.toLowerCase();

    return candidateName.includes(inputValue.toLowerCase());
  });

  return (
    <>
      <div className="candidate-search-container">
        <Search setInputValue={setInputValue} inputValue={inputValue} />{" "}
      </div>
      <section className="candidate-container">
        {inputValue &&
          searchCandidate.map((el, i) => (
            <WizardCard
              key={`candidate-` + i}
              id={i + 1}
              data={el}
              activeCandidate={props.activeCandidate}
              setActiveCandidate={props.setActiveCandidate}
              setCandidateId={props.setCandidateId}
              setCandidateName={props.setCandidateName}
            ></WizardCard>
          ))}
        {!inputValue &&
          allCandidates.map((el, i) => (
            <WizardCard
              key={`candidate-` + i}
              id={i + 1}
              data={el}
              activeCandidate={props.activeCandidate}
              setActiveCandidate={props.setActiveCandidate}
              setCandidateId={props.setCandidateId}
              setCandidateName={props.setCandidateName}
            ></WizardCard>
          ))}
        {inputValue && !searchCandidate?.length && <SearchError />}
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
