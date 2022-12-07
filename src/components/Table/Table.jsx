import React from "react";
import { useState, useContext, useEffect } from "react";

import { applicationContext } from "../../context";
import openModal from "./../../assets/open-modal.png";

const Table = ({ id }) => {
	const [reports, setReports] = useState([]);
	const { allReports } = useContext(applicationContext);

	const findReports = () => {
		const tmp = allReports.filter(
			(element) => element.candidateId === Number(id)
		);
		setReports(tmp);
	};

	useEffect(() => {
		findReports();
	}, [allReports]);

	return (
		<>
			<table width="100%" border="1">
				<thead>
					<tr>
						<th>Company</th>
						<th>Interview date</th>
						<th colSpan={2}>Status</th>
					</tr>
				</thead>

				<tbody>
					{reports.map((element) => (
						<tr key={element?.id}>
							<td>{element?.companyName}</td>
							<td>
								{element.interviewDate &&
									new Date(element?.interviewDate)
										.toISOString()
										.split("T")[0]}
							</td>
							<td>{element.status}</td>
							<td width="10%">
								<button>
									<img
										src={openModal}
										alt="Open modal"
										width="30"
										height="30"
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
