import React from "react";
import Search from "../Search/Search";
import WizardCard from "../WizardCard/WizardCard";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import "./Candidate.css";

function Candidate() {
  const placeholder = Array(6).fill({
    id: 56479186,
    name: "Declan Schaden",
    birthday:
      "Sun Jan 31 2021 19:56:57 GMT+0100 (Central European Standard Time)",
    email: "Emilia.Veum@hotmail.com",
    education: "Specialist",
  });
  return (
    <>
      <div className="candidate-search-container">
        <Search></Search>
      </div>
      <section className="candidate-container">
        {placeholder.map((el, i) => {
          return (
            <WizardCard
              do={() => {
                return `placeholder funct`;
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
