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
          console.log(el);
          return (
            <WizardCard
              do={() => {
                return `candidates funct`;
              }}
              key={i}
              data={el}
            ></WizardCard>
          );
        })}
      </section>
      <div className="candidate--next-prev">
        <Button name="Next"></Button>
      </div>
    </>
  );
}

export default Candidate;
