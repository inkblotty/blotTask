import axios from 'axios';

export default class API {
	static get = (path: string, data = null) => {
		return axios.get(path, data);
	};

	static post = (path: string, data = null) => {
		return axios.post(path, data);
	};

	static put = (path: string, data = null) => {
		return axios.put(path, data);
	};
}
