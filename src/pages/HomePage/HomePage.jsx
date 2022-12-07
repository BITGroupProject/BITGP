import React, { useState } from "react";
import "./homePage.css";
import Header from "../../components/Header/Header";
import { candidates } from "../../data";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
	const [candidate, setCandidate] = useState(candidates);

	return (
		<div>
			<Header />
			<div className="candidates-search">
				<span>Candidates</span>
				<Search />
			</div>
			<div className="card-wrapper">
				{candidate.map((element) => (
					<Card info={element} isList={false} />
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Homepage;
