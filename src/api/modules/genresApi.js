import client from "../axiosConfig";

const getGenres = async (mediaType) => {
    const endpoint = `genre/${mediaType}/list`;
    return client.get(endpoint);
};

export default getGenres;