export const SERVER_BASE_URL =
	process.env.NODE_ENV === 'development'
		? 'http://127.0.0.1:8080/api/test'
		: '';
