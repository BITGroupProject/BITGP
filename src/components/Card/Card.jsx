import React, { useContext } from "react";
import { applicationContext } from "../../context";
import { formattedDate } from "../../utils/utils";

import "./card.css";
import { Link } from "react-router-dom";
import eye from "./eye icon.png"

const Card = ({ info, isList }) => {
  const date = info?.interviewDate && formattedDate(info?.interviewDate, ".");
  const { setModalIsOpen, setModalInfo } = useContext(applicationContext);

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

							<img src={eye} onClick={() => {
								setModalIsOpen(true);
								setModalInfo(info)} } alt="eye" />
								
						
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="3"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
				</div>
			) : (
				<Link to={`/details/${info.id}`} className="card bg-">
					<img
						src="https://commentpara.de/img/anonymous.svg"
						alt="candidate"
					/>
					<p>{info.name}</p>
					<p>{info.email}</p>
				</Link>
			)}

      {/* <Modal modalIsOpen={modalIsOpen} /> */}
    </>
  );
};

export default Card;
