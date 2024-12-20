// services/MovieService.ts
import { Movie } from "@/types";

const getMoviesByUsername = async (username: string): Promise<Movie[]> => {
    try {
        const user = JSON.parse(sessionStorage.getItem("loggedInUser") || "{}");
        const token = user.token; // Retrieve the token from the logged-in user

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/user/username/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error fetching movies for user: ${errorText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

const addMovie = async (movie: Movie): Promise<Response> => {
    try {
        const user = JSON.parse(sessionStorage.getItem("loggedInUser") || "{}");
        const token = user.token; // Retrieve the token from the logged-in user

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(movie),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error adding movie: ${errorText}`);
        }

        return response;
    } catch (error) {
        console.error("Error adding movie:", error);
        throw error;
    }
};

const MovieService = {
    getMoviesByUsername,
    addMovie
};

export default MovieService;