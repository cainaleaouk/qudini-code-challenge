import base64 from 'base-64';

const API_BASE_URL = 'api/queue/';

class API {

	// ... implement the other methods (post, put, delete)

	get(endpoint) {
		return this.fetchData(`${API_BASE_URL}/${endpoint}`, { 
			method: 'GET',  
			headers: this.getHeaders(),
		});
	}

	fetchData(url, params) {
		// Check if response is 200 before passing down, could catch errors at this level
		return fetch(url, params).then(response => response.json());
	}

	getHeaders() {
		const headers = new Headers();
    headers.set('Authorization', 'Basic ' + base64.encode("codetest1:codetest100"));	
    return headers;
	}
}

const api = new API();
export default api;