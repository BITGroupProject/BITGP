import React from "react";
import SearchBar from "../Search/Search";
import Button from "../Button/Button";
import "./Company.css";

function Company() {
  const placeholder = Array(6).fill({
    id: 73143881,
    name: "Google",
    email: "office@google.com",
  });
  return (
    <>
      <SearchBar></SearchBar>
      <section className="company-container">
        {placeholder.map((el, i) => {
          return (
            <>
              <div className="company-item" key={i}>
                {el.name}
              </div>
            </>
          );
        })}
      </section>
      <div className="company--next-prev">
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </>
  );
}

export default Company;
