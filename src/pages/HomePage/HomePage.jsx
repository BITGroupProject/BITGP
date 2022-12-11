import React, { useState, useContext } from "react";
import "./homePage.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Search from "../../components/Search/Search";
import SearchError from "../../components/SearchError/SearchError";
import Card from "../../components/Card/Card";

import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";

import { applicationContext } from "../../context";

const Homepage = () => {
	const [inputValue, setInputValue] = useState("");
	const { allCandidates } = useContext(applicationContext);

	const searchCandidate = allCandidates.filter((e) => {
		const candidateName = e.name.toLowerCase();

		return (
			candidateName.includes(inputValue.toLowerCase())
		);
	});

	return (
		<>
			<>
				<div className="homePage">
					{/* I can move this Header and Footer one section up if I'm using them on the whole app except Login */}
					<Header />
					<main>
						<BackgroundAnimation />
						<div className="candidates-search">
							<span>Candidates</span>
							<Search setInputValue={setInputValue} inputValue={inputValue} />
						</div>
						<div className="card-wrapper">
							{inputValue && searchCandidate.map((element) => (
								<Card info={element} isList={false} />
							))}
							{!inputValue && allCandidates.map((element) => (
								<Card info={element} isList={false} />
							))}
							{inputValue && !searchCandidate?.length && <SearchError />}
						</div>
					</main>

				</div>
				<Footer />
			</>

		</>
	);
};

export default Homepage;
