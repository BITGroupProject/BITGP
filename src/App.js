import { ApplicationProvider } from "./context";

import { Route, Switch } from "react-router-dom";

import "./app.css";

import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import { parseJwt } from "./utils/utils";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import ProtectedPages from "./pages/ProtectedPages/ProtectedPages";

function App() {
	const [allCandidates, setAllCandidates] = useState([]);
	const [allCompanies, setAllCompanies] = useState([]);
	const [allReports, setAllReports] = useState([]);
	const [rerender, setRerender] = useState("");
	const [token, setToken] = useState(
		localStorage.getItem("token") ? localStorage.getItem("token") : ""
	);

	const [isAdmin, setIsAdmin] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalInfo, setModalInfo] = useState({});

	useEffect(() => {
		setIsLogged(!!token);
		const parsedData = token && parseJwt(token);
		setIsAdmin(parsedData?.email === "admin@admin.com");
	}, [token]);

	const apiUrl = "https://node-api-krmk.onrender.com/api"; // when using add /your-api-route

	useEffect(() => {
		if (token) {
			setTimeout(() => {
				fetch(apiUrl + "/reports", {
					headers: {
						Authorization: "Bearer " + token,
					},
				})
					.then((res) => res.json())
					.then((data) => setAllReports(data))
					.catch((error) => console.log(error));
			}, 5000);
		}
	}, [token, rerender]);

	useEffect(() => {
		if (token) {
			fetch(apiUrl + "/candidates", {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			})
				.then((res) => res.json())
				.then((res) => setAllCandidates(res))
				.catch((error) => console.log(error));
		}
	}, [token]);

	return (
		<>
			<ApplicationProvider
				value={{
					allCandidates,
					allCompanies,

					allReports,
					setAllReports,

					token,
					setToken,

					modalInfo,
					setModalInfo,

					setModalIsOpen,
					modalIsOpen,

					isAdmin,

					apiUrl,

					setRerender,
				}}
			>
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>

					<ProtectedPages />

					<Route path="*">
						<ErrorPage />
					</Route>
				</Switch>
			</ApplicationProvider>
		</>
	);
}

export default App;
