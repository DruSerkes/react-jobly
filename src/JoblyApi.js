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
		try {
			let res = await this.request(`companies/${handle}`);
			return res.company;
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async getAllCompanies(params = null) {
		try {
			if (params) {
				let res = await this.request(`companies`, params);
				return res.companies;
			} else {
				let res = await this.request(`companies`);
				return res.companies;
			}
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async getAllJobs(params = null) {
		try {
			if (params) {
				let res = await this.request(`jobs`, params);
				return res.jobs;
			} else {
				let res = await this.request('jobs');
				return res.jobs;
			}
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async login(data) {
		try {
			let res = await this.request('login', data, 'post');
			return res.token;
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async register(data) {
		try {
			let res = await this.request('users', data, 'post');
			return res.token;
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async getUser(token) {
		try {
			let decoded = jwt.decode(token);
			let res = await this.request(`users/${decoded.username}`);
			return res.user;
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async updateUser(data) {
		try {
			const { username } = data;
			delete data.username;
			let res = await this.request(`users/${username}`, data, 'patch');
			return res.user;
		} catch (e) {
			console.log(e);
			return e;
		}
	}

	static async apply(job, currentUser) {
		try {
			const { username } = currentUser;
			let res = await this.request(`jobs/${job.id}/apply`, job, 'post');
			let updatedUser = await this.request(`users/${username}`);
			return [ res.message, updatedUser.user ];
		} catch (e) {
			console.log(e);
			return e;
		}
	}
}

export default JoblyApi;
