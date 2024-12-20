import React, { useEffect, useState } from "react";
import { Movie } from "@/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import MovieService from "@/services/MovieService";
import UserService from "@/services/UserService";

const MovieOverview: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchUsername = () => {
            const username = UserService.getLoggedInUsername();
            setUsername(username);
        };

        fetchUsername();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                if (username) {
                    const movies = await MovieService.getMoviesByUsername(username);
                    setMovies(movies);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [username]);

    if (username === null) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {movies.length === 0 ? (
                <p className="text-center text-l mb-2 col-span-full pt-5">{t('movieoverview.nomovies')}</p>
            ) : (
                movies.map((movie) => (
                    <div key={movie.id} className="bg-movie-card text-center shadow-md rounded-lg p-4 m-4 transform transition-transform hover:scale-105 hover:shadow-lg">
                        <h2 className="color-title-movie-card text-xl font-bold mb-2">{movie.name}</h2>
                        <p className="text-white">{t('movieoverview.moviecard.director')} {movie.director}</p>
                        <p className="text-white">{t('movieoverview.moviecard.releaseyear')} {movie.releaseYear}</p>
                        <p className="text-white">{t('movieoverview.moviecard.genre')} {movie.genre}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieOverview;