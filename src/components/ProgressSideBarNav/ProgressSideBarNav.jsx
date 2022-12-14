import React from "react";
import "./progressSideBarNav.css";

function ProgressSideBarNav(props) {
	return (
		<aside className="progress--side-bar">
			<section className="progress--steps">
				<div className={props.step >= 1 ? `step step-active` : `step`}>
					<span className="step--number"> 1</span>
					<span className="step--name">Select Candidate</span>
				</div>
				<div className={props.step >= 2 ? `step step-active` : `step`}>
					<span className="step--number"> 2</span>
					<span className="step--name">Select Company</span>
				</div>
				<div className={props.step >= 3 ? `step step-active` : `step`}>
					<span className="step--number"> 3</span>
					<span className="step--name">Fill Report Detail</span>
				</div>
			</section>
			<section className="progress--completed">
				<div
					className={
						props.candidate.candidateName ? `` : `step-hidden`
					}
				>
					<div className="progress--detail-title">Candidate</div>
					<div className="progress--detail">
						{props.candidate.candidateName}
					</div>
				</div>
				<div className={props.company.companyName ? `` : `step-hidden`}>
					<div className="progress--detail-title">Company</div>
					<div className="progress--detail">
						{props.company.companyName}
					</div>
				</div>
			</section>
		</aside>
	);
}

export default ProgressSideBarNav;
