import client from "../axiosConfig";


const mediaApi = {
	getList: async (mediaType, mediaCategory, params) => {
        const endpoint = `${mediaType}/${mediaCategory}`;
        return client.get(endpoint, params);
    },
    getTrending: async (mediaType, mediaCategory, time_window) => {
        const endpoint = `${mediaCategory}/${mediaType}/${time_window}`;
        return client.get(endpoint);
    },
    getDetail: async (mediaType, id) => {
        const endpoint = `${mediaType}/${id}`;
        return client.get(endpoint);
    },
    getVideos: async (mediaType , id) => {
        const endpoint = `${mediaType}/${id}/videos`;
        return client.get(endpoint);
    },
    getCredits: async (mediaType , id) => {
        const endpoint = `${mediaType}/${id}/credits`;
        return client.get(endpoint);
    },
    getSimilar: async (mediaType, id , params) => {
        const endpoint = `${mediaType}/${id}/similar`;
        return client.get(endpoint , params);
    },
    search: async (mediaType, page, query) => {
        const endpoint = `search/${mediaType}?query=${query}&include_adult=false&page=${page}`;
        return client.get(endpoint, page, query);
    },
    discover: async (mediaType, page, genre) => {
        let endpoint;
        if (genre === undefined) {
            endpoint = `discover/${mediaType}?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc`;
        } else {
            endpoint = `discover/${mediaType}?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
        }
        console.log(endpoint);
        return client.get(endpoint , mediaType, page, genre);
    }
};

export default mediaApi;
