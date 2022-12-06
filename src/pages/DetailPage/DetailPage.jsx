import React, { useContext, useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { applicationContext } from "../../context";

import "./detailPage.css";

const DetailPage = ({ id }) => {
	const [candidate, setCandidate] = useState({});

	const { allCustomers } = useContext(applicationContext);

	const findCandidate = () => {
		setCandidate(allCustomers.find((element) => element.id === Number(id)));
	};

	useEffect(() => {
		findCandidate();
	}, [allCustomers]);

	return (
		<>
			<section id="detailPage">
				<div className="profile">
					<figure className="profile-image">
						<img
							src={candidate?.avatar}
							alt=""
							width="300"
							height="300"
						/>
					</figure>
					<div className="profile-info">
						<div>
							<h4>{candidate?.name}</h4>
							<small>Name</small>
						</div>
						<div>
							<h4>{candidate?.email}</h4>
							<small>Email</small>
						</div>
						<div>
							<h4>
								{candidate?.birthday &&
									new Date(candidate?.birthday)
										.toISOString()
										.split("T")[0]}
							</h4>
							<small>Date of birthday</small>
						</div>
						<div>
							<h4>{candidate?.education}</h4>
							<small>Education</small>
						</div>
					</div>
				</div>

				<Table id={id} />
			</section>
		</>
	);
};

export default DetailPage;
