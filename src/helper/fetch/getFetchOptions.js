export default function getFetchOptions(method, requestBody) {
	const fetchOptions = {
		method,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(requestBody),
	};

	return fetchOptions;
}
