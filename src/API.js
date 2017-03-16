import axios from 'axios';
// this is my api helper

const API = axios.create({
	baseUrl: 'http://localhost:3000/api',
	timeout: 10000,
	transformRequest: [(data) => JSON.stringify(data)],
	headers: {
		'Accept': 'application/json',
		'Content-type': 'application/json'
	}
});

module.exports = API;
