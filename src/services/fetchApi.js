const fetchApi = (url, callbackData, callbackError, options) => {
	const defaultOptions = {
		Accept: "application/json",
		"Content-Type": "application/json",
	};

	const headerOptions = {
		...defaultOptions,
		...options,
	};

	return fetch(process.env.REACT_APP_API_URL + "/" + url, headerOptions)
		.then((res) => res.json())
		.then((res) => callbackData(res))
		.catch((error) => callbackError(error));
};

export default fetchApi;
