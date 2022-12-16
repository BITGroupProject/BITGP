import React, { useContext, useEffect, useState } from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import Table from "../../components/Table/Table";
import { applicationContext } from "../../context";
import Modal from "../../components/Modal/Modal";
import fetchApi from "./../../services/fetchApi";

import "./detailPage.css";
import { useHistory } from "react-router-dom";

const DetailPage = ({ id }) => {
	const [candidate, setCandidate] = useState({});
	const { token } = useContext(applicationContext);

	const history = useHistory();
	const errorHandle = () => {
		history.goBack();
	};
	const getCandidate = (id) => {
		fetchApi(`candidates/${id}`, setCandidate, errorHandle, {
			Authorization: "Bearer " + token,
		});
	};

	const findCandidate = () => {
		getCandidate(id);
	};

	useEffect(() => {
		findCandidate();
	}, []);

	return (
		<>
			<Modal />

			<section id="detailPage">
				<BackgroundAnimation />

				<main>
					<div className="profile bg-glass">
						<figure className="profile-image">
							<img
								// src={candidate?.avatar}
								src="https://avatarfiles.alphacoders.com/161/161365.jpg"
								alt=""
								width="300"
								height="300"
							/>
						</figure>
						<div className="profile-info">
							<div className="bg-glass bg-glass--animated">
								<h4>{candidate?.name}</h4>
								<small>Name</small>
							</div>
							<div className="bg-glass bg-glass--animated">
								<h4>{candidate?.email}</h4>
								<small>Email</small>
							</div>
							<div className="bg-glass bg-glass--animated">
								<h4>
									{candidate?.birthday &&
										new Date(candidate?.birthday)
											.toISOString()
											.split("T")[0]}
								</h4>
								<small>Date of birthday</small>
							</div>
							<div className="bg-glass bg-glass--animated">
								<h4>{candidate?.education}</h4>
								<small>Education</small>
							</div>
						</div>
					</div>

					<Table id={id} />
				</main>
			</section>
		</>
	);
};

export default DetailPage;
