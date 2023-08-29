import axios from "axios";
import queryString from "query-string";

const baseURL = "https://api.themoviedb.org/3/";
const tmdbToken = import.meta.env.VITE_APP_TMDB_TOKEN;

const client = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${tmdbToken}`,
	},
    paramsSerializer: (params) => queryString.stringify(params) 
});

client.interceptors.request.use(async (config) => config);

client.interceptors.response.use(
	(res ) => {
		if (res && res.data) {
			return res.data;
		}
		return res;
	},
	(err) => {
		throw err;
	}
);

export default client;
