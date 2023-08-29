const mediaType = {
	movie: "movie",
	tv: "tv",
};

const mediaCategory = {
	popular: "popular",
	top_rated: "top_rated",
	trending: "trending",
};

const time_window = {
	day: "day",
	week: "week",
};

const backdropPath = (imgEndpoint) =>
	`https://image.tmdb.org/t/p/original/${imgEndpoint}`;

const posterPath = (imgEndpoint) =>
	`https://image.tmdb.org/t/p/w500/${imgEndpoint}`;

const youtubePath = (videoKey) =>
	`https://www.youtube.com/embed/${videoKey}?controls=0`;

const tmdbConfig = {
	mediaType,
	mediaCategory,
	time_window,
	backdropPath,
	posterPath,
	youtubePath,
};

export default tmdbConfig;
