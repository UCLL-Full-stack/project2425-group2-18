// import Movie from "@/types";

import { useRouter } from "next/router";

interface Movie {
    id: number;
    name: string;
    director: string;
    releaseYear: number;
}

interface MovieProps {
    movies: Movie[];
}

const MovieOverview: React.FC<MovieProps> = ({ movies }) => {

    const router = useRouter();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {movies.length === 0 ? (
                <p className="text-center text-l mb-2 col-span-full pt-5">No movies yet!</p>
            ) : (
                movies.map((movie) => (
                    <div key={movie.id} className="bg-white shadow-md rounded-lg p-4 m-4">
                        <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
                        <p className="text-gray-700 mb-1">Director: {movie.director}</p>
                        <p className="text-gray-700">Release Year: {movie.releaseYear}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieOverview;