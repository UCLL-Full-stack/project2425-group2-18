import { Movie } from "../model/movie";
import movieDb from "../repository/movie.db";
import { MovieInput } from '../types';

const getAllMovies = async (): Promise<Movie[]> => movieDb.getAllMovies();

const getMovieById = async (id: number): Promise<Movie | null> => {
    const movie = await movieDb.getMovieById({ id });
    if (!movie) {
        throw new Error(`Movie with ID: ${id} does not exist.`);
    }
    return movie;
};

const getMovieByName = async (name: string): Promise<Movie | null> => {
    const movie = await movieDb.getMovieByName({ name });
    if (!movie) {
        throw new Error(`Movie with name: ${name} does not exist.`);
    }
    return movie;
};

const getMoviesByUserId = async (userId: number): Promise<Movie[]> => {
    const movies = await movieDb.getMoviesByUserId({ userId });
    if (!movies || movies.length === 0) {
        throw new Error(`No movies found for user with ID: ${userId}.`);
    }
    return movies;
};

const createMovie = async ({
                               name,
                               director,
                               releaseYear,
                               genre,
                               userId,
                           }: MovieInput): Promise<Movie> => {
    const existingMovie = await movieDb.getMovieByName({ name });

    if (existingMovie) {
        throw new Error(`Movie with name ${name} is already registered.`);
    }

    const movie = new Movie({ name, director, releaseYear, genre, userId });

    return await movieDb.createMovie(movie);
};

/*

const updateMovie = async (id: number, movieInput: Partial<MovieInput>): Promise<Movie | null> => {
    const movieData: Partial<Movie> = {};
    if (movieInput.name) movieData.name = movieInput.name;
    if (movieInput.director) movieData.director = movieInput.director;
    if (movieInput.releaseYear) movieData.releaseYear = movieInput.releaseYear;
    if (movieInput.genre) movieData.genre = movieInput.genre;
    if (movieInput.userId) movieData.userId = movieInput.userId;

    const movie = await movieDb.updateMovie(id, movieData);
    if (!movie) {
        throw new Error(`Movie with ID: ${id} does not exist.`);
    }
    return movie;
};

 */

export default {
    getAllMovies,
    getMoviesByUserId,
    getMovieById,
    getMovieByName,
    createMovie,
    //updateMovie,
};