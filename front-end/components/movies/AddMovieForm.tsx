//import UserService from "@/services/MovieService";
import { User, StatusMessage } from "@/types";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import MovieService from "@/services/MovieService";
import UserService from "@/services/UserService";

const AddMovieForm: React.FC = () => {
    const [moviename, setMovieName] = useState("");
    const [movienameError, setMovieNameError] = useState<string | null>(null);
    const [director, setDirector] = useState("");
    const [directorError, setDirectorError] = useState<string | null>(null);
    const [releaseYear, setReleaseYear] = useState("");
    const [releaseYearError, setReleaseYearError] = useState<string | null>(null);
    const [genre, setGenre] = useState("");
    const [genreError, setGenreError] = useState<string | null>(null);
    //const [image, setImage] = useState("");
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
    const router = useRouter();

    const { t } = useTranslation();

    const clearErrors = () => {
        setMovieNameError(null);
        setDirectorError(null);
        setReleaseYearError(null);
        setGenreError(null);
        setStatusMessages([]);
    }


    const validate = (): boolean => {
        let result = true;
        const messages: StatusMessage[] = [];

        if (!moviename) {
            setMovieNameError(t('addmovie.error.errormoviename'));
            result = false;
        }
        if (!director) {
            setDirectorError(t('addmovie.error.errordirector'));
            result = false;
        }
        if (!releaseYear) {
            setReleaseYearError(t('addmovie.error.errorreleaseyear'));
            result = false;
        }
        if (!genre) {
            setGenreError(t('addmovie.error.errorgenre'));
            result = false;
        }
        return result;
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        clearErrors();

        if (!validate()) {
            return;
        }

        const userId = UserService.getLoggedInUserId();
        if (!userId) {
            console.error("User ID is required");
            return;
        }

        const movie = { name: moviename, director, releaseYear: Number(releaseYear), genre, userId };
        const response = await MovieService.addMovie(movie);

        if (response.ok) {
            setStatusMessages([
                {
                    message: t('addmovie.success'),
                    type: "success",
                },
            ]);

            const movie = await response.json();

            setTimeout(() => {
                router.push("/movie");
            }, 2000);
        }
    };

    return (
        <>
            <form style={{height: 'auto'}}
                  className=" w-1/3 mt-4 pb-7 flex flex-col items-center bg-forms-grey rounded-lg"
                  onSubmit={handleSubmit}>
                <h1 className="font-semibold text-4xl mt-10 mb-8">{t('addmovie.title')}</h1>
                <div>
                    <div className="text-white mt-2 mb-2">
                        <label htmlFor="movienameInput" className="text-xl mb-2">
                            {t('addmovie.moviename')}
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="movienameInput"
                            type="text"
                            value={moviename}
                            onChange={(event) => setMovieName(event.target.value)}
                            className="w-72 p-2.5 text-black bg-white rounded-lg"
                        />
                        {movienameError && <div className="text-red-600">{movienameError}</div>}
                    </div>
                </div>

                <div>
                    <div className="text-white mt-2 mb-2">
                        <label htmlFor="directorInput" className="text-xl mb-2">
                            {t('addmovie.director')}
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="directorInput"
                            type="text"
                            value={director}
                            onChange={(event) => setDirector(event.target.value)}
                            className="w-72 p-2.5 text-black bg-white rounded-lg"
                        />
                        {directorError && <div className="text-red-600">{directorError}</div>}
                    </div>
                </div>
                <div>
                    <div className="text-white mt-2 mb-2">
                        <label htmlFor="releaseyearInput" className="text-xl mb-2">
                            {t('addmovie.releaseyear')}
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="releaseyearInput"
                            type="number"
                            value={releaseYear}
                            onChange={(event) => setReleaseYear(event.target.value)}
                            className="w-full p-2.5 text-black bg-white rounded-lg"
                        />
                        {releaseYearError && <div className="text-red-600">{releaseYearError}</div>}
                    </div>
                </div>
                <div>
                    <div className="text-white mt-2 mb-2">
                        <label htmlFor="genreInput" className="text-xl mb-2">
                            {t('addmovie.genre')}
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="genreInput"
                            type="text"
                            value={genre}
                            onChange={(event) => setGenre(event.target.value)}
                            className="w-full p-2.5 text-black bg-white rounded-lg"
                        />
                        {genreError && <div className="text-red-600">{genreError}</div>}
                    </div>
                </div>

                {/*
                <div>
                    <div className="text-white mt-2 mb-2">
                        <label htmlFor="pictureInput" className="text-xl mr-52 mb-2">
                            Picture
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="pictureInput"
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                                const file = event.target.files?.[0];
                                if (file) {
                                    //file input
                                }
                            }}
                            className="w-full p-2.5 bg-white rounded-lg"
                        />
                    </div>
                </div>
                */}
                <div className="mt-6">
                    <button
                        className="bg-green-button-home text-white font-semibold py-2 px-8 rounded-lg bg-hover-button-home"
                        type="submit"
                    >
                        {t('addmovie.buttonaddmovie')}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddMovieForm;
