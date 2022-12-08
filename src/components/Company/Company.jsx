import React from "react";
import SearchBar from "../Search/Search";
import Button from "../Button/Button";
import CompanyItem from "../CompanyItem/CompanyItem";
import { candidates } from "../../data";
import "./Company.css";

function Company(props) {
  return (
    <>
      <div className="company-search-container">
        <SearchBar></SearchBar>
      </div>
      <section className="company-container">
        {candidates.map((el, i) => {
          return (
            <CompanyItem
              data={el}
              key={`company-` + i}
              id={i + 1}
              activeCompany={props.activeCompany}
              setActiveCompany={props.setActiveCompany}
              setCompanyId={props.setCompanyId}
              setCompanyName={props.setCompanyName}
            ></CompanyItem>
          );
        })}
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
