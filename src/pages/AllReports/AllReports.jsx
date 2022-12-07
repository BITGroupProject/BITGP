// import React from 'react'
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./allReports.css";
import { reports } from "./../../data";
import SearchIcon from "./SearchIcon.svg";

const AllReports = () => {
  const [allReports, setAllReports] = useState(reports);
  const [inputValue, setInputValue] = useState("");

  const searchReports = allReports.filter((e) => {
    const companyName = e.companyName.toLowerCase();
    const candidateName = e.candidateName.toLowerCase();
    return (
      companyName.includes(inputValue.toLowerCase()) ||
      candidateName.includes(inputValue.toLowerCase())
    );
  });

  return (
    <div className="allReports">
      <input
        type="search"
        id="search"
        placeholder="Search..."
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      {/* false -> map  */}
      {!inputValue && allReports.map((e) => <Card allCards={e} />)}

      {inputValue && searchReports.map((e) => <Card allCards={e} />)}
      {inputValue && !searchReports?.length && <div>Error</div>}
    </div>
  );
};

export default AllReports;
