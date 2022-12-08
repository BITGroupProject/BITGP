import React, { useState, useContext } from "react";
import "./homePage.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Search from "../../components/Search/Search";
import SearchError from "../../components/SearchError/SearchError";
import Card from "../../components/Card/Card";

import { applicationContext } from "../../context";

const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const { allCandidates } = useContext(applicationContext);

  const searchCandidate = allCandidates.filter((e) => {
    const candidateName = e.name.toLowerCase();

    return candidateName.includes(inputValue.toLowerCase());
  });

  return (
    <div>
      <Header />
      <div className="candidates-search">
        <span>Candidates</span>
        <Search setInputValue={setInputValue} inputValue={inputValue} />
      </div>
      <div className="card-wrapper">
        {inputValue &&
          searchCandidate.map((element, i) => (
            <Card key={`card-x-` + i} info={element} isList={false} />
          ))}
        {!inputValue &&
          allCandidates.map((element, i) => (
            <Card key={`card-y-` + i} info={element} isList={false} />
          ))}
        {inputValue && !searchCandidate?.length && <SearchError />}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
