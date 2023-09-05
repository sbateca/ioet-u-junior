export const API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=most_pop_movies';
export const API_MOVIE_ID_URL = 'https://moviesdatabase.p.rapidapi.com/titles/{id}?info=base_info';
export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '<your api key>',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
