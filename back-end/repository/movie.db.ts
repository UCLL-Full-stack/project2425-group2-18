import { Movie } from '../model/movie';
import database from '../util/database';

const getAllMovies = async (): Promise<Movie[]> => {
    try {
        const moviesPrisma = await database.movie.findMany();
        return moviesPrisma.map((moviePrisma) => Movie.from(moviePrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getMovieById = async ({ id }: { id: number }): Promise<Movie | null> => {
    try {
        const moviePrisma = await database.movie.findUnique({
            where: { id },
        });

        return moviePrisma ? Movie.from(moviePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getMoviesByUsername = async ({ username }: { username: string }): Promise<Movie[]> => {
    try {
        const moviesPrisma = await database.movie.findMany({
            where: { user: { username } },
        });
        return moviesPrisma.map((moviePrisma) => Movie.from(moviePrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getMoviesByUserId = async ({ userId }: { userId: number }): Promise<Movie[]> => {
    try {
        const moviesPrisma = await database.movie.findMany({
            where: { userId },
        });
        return moviesPrisma.map((moviePrisma) => Movie.from(moviePrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getMovieByName = async ({ name }: { name: string }): Promise<Movie | null> => {
    try {
        const moviePrisma = await database.movie.findFirst({
            where: { name },
        });

        return moviePrisma ? Movie.from(moviePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const createMovie = async (movie: Movie): Promise<Movie> => {
    try {
        const moviePrisma = await database.movie.create({
            data: {
                name: movie.getName(),
                director: movie.getDirector(),
                releaseYear: movie.getReleaseYear(),
                genre: movie.getGenre(),
                userId: movie.getUserId(),
            },
        });
        return Movie.from(moviePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const updateMovie = async (id: number, movie: Partial<Movie>): Promise<Movie | null> => {
    try {
        const data: any = {};
        if (movie.getName) data.name = movie.getName();
        if (movie.getDirector) data.director = movie.getDirector();
        if (movie.getReleaseYear) data.releaseYear = movie.getReleaseYear();
        if (movie.getGenre) data.genre = movie.getGenre();
        if (movie.getUserId) data.userId = movie.getUserId();

        const updatedMoviePrisma = await database.movie.update({
            where: { id },
            data,
        });

        return updatedMoviePrisma ? Movie.from(updatedMoviePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getAllMovies,
    createMovie,
    getMoviesByUsername,
    getMoviesByUserId,
    getMovieById,
    getMovieByName,
    updateMovie
};