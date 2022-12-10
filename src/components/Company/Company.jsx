import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import CompanyItem from "../CompanyItem/CompanyItem";
import "./Company.css";

import Search from "../../components/Search/Search";
import SearchError from "../../components/SearchError/SearchError";
import { applicationContext } from "../../context";

function Company(props) {
  const [inputValue, setInputValue] = useState("");
  const { allCompanies } = useContext(applicationContext);

  const searchCandidate = allCompanies.filter((e) => {
    const candidateName = e.name.toLowerCase();

    return candidateName.includes(inputValue.toLowerCase());
  });
  return (
    <>
      <div className="company-search-container">
        <Search setInputValue={setInputValue} inputValue={inputValue} />{" "}
      </div>
      <section className="company-container">
        {inputValue &&
          searchCandidate.map((el, i) => (
            <CompanyItem
              data={el}
              key={`company-` + i}
              id={i + 1}
              activeCompany={props.activeCompany}
              setActiveCompany={props.setActiveCompany}
              setCompanyId={props.setCompanyId}
              setCompanyName={props.setCompanyName}
            ></CompanyItem>
          ))}
        {!inputValue &&
          allCompanies.map((el, i) => (
            <CompanyItem
              data={el}
              key={`company-` + i}
              id={i + 1}
              activeCompany={props.activeCompany}
              setActiveCompany={props.setActiveCompany}
              setCompanyId={props.setCompanyId}
              setCompanyName={props.setCompanyName}
            ></CompanyItem>
          ))}
        {inputValue && !searchCandidate?.length && <SearchError />}

        {/* <CompanyItem
          data={el}
          key={`company-` + i}
          id={i + 1}
          activeCompany={props.activeCompany}
          setActiveCompany={props.setActiveCompany}
          setCompanyId={props.setCompanyId}
          setCompanyName={props.setCompanyName}
        ></CompanyItem> */}
      </section>
      <div className="company--next-prev">
        <Button do={props.prev} name="Back"></Button>

        <div className={props.activeCompany ? `` : `btn-hidden`}>
          <Button do={props.next} name="Next"></Button>
        </div>
      </div>
    </>
  );
}

export default Company;
