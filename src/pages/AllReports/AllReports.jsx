// import React from 'react'
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./allReports.css";
import { reports } from "./../../data";
import SearchIcon from "./SearchIcon.svg";

const AllReports = () => {
  const [allReports, setAllReports] = useState(reports);
  const [inputValue, setInputValue] = useState("");

  const searchReports = allReports.filter((e) => { const d = e.companyName.toLowerCase(); return d.includes(inputValue.toLowerCase())});



  return (
    <div className="allReports">
      <input type="search" id="search" placeholder="Search..." onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
      {!inputValue && allReports.map((e) => (<Card allCards={e} />))}
      {inputValue && searchReports.map((e) => (<Card allCards={e} />))}
    </div>
  );
};

export default AllReports;
