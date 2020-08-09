import axios from 'axios';
const jwt = require('jsonwebtoken');

class JoblyApi {
	static async request(endpoint, paramsOrData = {}, verb = 'get') {
		// paramsOrData._token = // for now, hardcode token for "testing"
		// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc' +
		// 	'3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30.' +
		// 	'COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U';

		paramsOrData._token = localStorage.getItem('jobly-token') || null;

		console.debug('API Call:', endpoint, paramsOrData, verb);

		try {
			return (await axios({
				method                               : verb,
				url                                  : `http://localhost:3001/${endpoint}`,
				[verb === 'get' ? 'params' : 'data']: paramsOrData
			})).data;
			// axios sends query string data via the "params" key,
			// and request body data via the "data" key,
			// so the key we need depends on the HTTP verb
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.message;
			throw Array.isArray(message) ? message : [ message ];
		}
	}

	static async getCompany(handle) {
		let res = await this.request(`companies/${handle}`);
		return res.company;
	}

	static async getAllCompanies() {
		let res = await this.request(`companies`);
		return res.companies;
	}

	static async getAllJobs() {
		let res = await this.request('jobs');
		return res.jobs;
	}

	static async login(data) {
		let res = await this.request('login', data, 'post');
		return res.token;
	}

	static async register(data) {
		let res = await this.request('users', data, 'post');
		return res.token;
	}

	static async getUser(token) {
		let decoded = jwt.decode(token);
		let res = await this.request(`users/${decoded.username}`);
		return res.user;
	}

	static async updateUser(data) {
		const { username } = data;
		delete data.username;
		let res = await this.request(`users/${username}`, data, 'patch');
		return res.user;
	}
}

export default JoblyApi;
