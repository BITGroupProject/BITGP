import React, { useContext } from "react";
import { applicationContext } from "../../context";
import { formattedDate } from "../../utils/utils";

import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ info, isList }) => {
  const date = formattedDate(info?.interviewDate, ".");
  const { setModalIsOpen } = useContext(applicationContext)
  

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
            <svg
              onClick={() => setModalIsOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="black"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      ) : (
        <Link to={`/details/${info.id}`} className="card">
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
