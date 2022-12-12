import React, { useContext } from "react";
import { applicationContext } from "../../context";
import { formattedDate } from "../../utils/utils";

import "./card.css";
import { Link } from "react-router-dom";
import eye from "./eye icon.png";
import X from "./X.png";

const Card = ({ info, isList }) => {
  const date = info?.interviewDate && formattedDate(info?.interviewDate, ".");
  const {
    setModalIsOpen,
    setModalInfo,
    token,
    apiUrl,
    setAllReports,
    setRerender,
  } = useContext(applicationContext);

  const deleteReport = () => {
    setTimeout(() => {
      fetch(apiUrl + "/reports/" + info.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((res) => setRerender(new Date().getTime())) // random vrednost, da bi mogao dependency da menja
        .catch((error) => console.log(error));
    }, 5000);
  };

  return (
    <>
      {isList ? (
        <div className="singleReport">
          <div className="companyName">
            <h2>{info.companyName}</h2>
            <p>Company</p>
          </div>
          <div className="candidateName">
            <h2>{info.candidateName}</h2>
            <p>Candidate</p>
          </div>
          <div className="interviewDate">
            <h2>{date}</h2>
            <p>Interview Date</p>
          </div>
          <div className="status">
            <h2>{info.status}</h2>
            <p>Status</p>
          </div>
          <div className="eye">
            <img
              src={eye}
              onClick={() => {
                setModalIsOpen(true);
                setModalInfo(info);
              }}
              alt="eye"
            />

            <img className="X" src={X} onClick={deleteReport} alt="X" />
          </div>
        </div>
      ) : (
        <Link to={`/details/${info.id}`} className="card bg-">
          <img src="https://commentpara.de/img/anonymous.svg" alt="candidate" />
          <p>{info.name}</p>
          <p>{info.email}</p>
        </Link>
      )}

      {/* <Modal modalIsOpen={modalIsOpen} /> */}
    </>
  );
};

export default Card;
