import React, { useState, useContext } from "react";
import Card from "../../components/Card/Card";
import "./allReports.css";
import { reports } from "./../../data";
import SearchIcon from "./SearchIcon.svg";

import Footer from "../../components/Footer/Footer";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { applicationContext } from "./../../context";
import Modal from "../../components/Modal/Modal";
import Search from "../../components/Search/Search";

const AllReports = () => {
  // const [allReports, setAllReports] = useState(reports);
  const [inputValue, setInputValue] = useState("");
  const { allReports } = useContext(applicationContext);

  const searchReports = allReports.filter((e) => {
    const companyName = e.companyName.toLowerCase();
    const candidateName = e.candidateName.toLowerCase();
    return (
      companyName.includes(inputValue.toLowerCase()) ||
      candidateName.includes(inputValue.toLowerCase())
    );
  });

  return (
    <>
      <Modal />
      <AdminHeader button1="button1" button2="button2" />

      <div className="allReports">
        <Search setInputValue={setInputValue} inputValue={inputValue} />

        {!inputValue &&
          allReports.map((e) => <Card info={e} key={e.id} isList={true} />)}

        {inputValue &&
          searchReports.map((e) => <Card info={e} key={e.id} isList={true} />)}
        {inputValue && !searchReports?.length && <div>Error</div>}
      </div>

      <Footer />
    </>
  );
};

export default AllReports;
