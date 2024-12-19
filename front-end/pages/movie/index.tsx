import Head from "next/head";
import Header from "@/components/header";
import Link from "next/link";
import MovieOverview from "@/components/movies/MovieOverview";
import { Movie } from "@/components/movies/MovieOverview";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const Movie: React.FC = () => {

    const {t} = useTranslation();

    const movies: Movie[] = [
        { id: 1, name: "Inception", director: "Christopher Nolan", releaseYear: 2010 },
        { id: 2, name: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", releaseYear: 1999 },
        { id: 3, name: "Interstellar", director: "Christopher Nolan", releaseYear: 2014 },
        { id: 4, name: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008 },
        { id: 5, name: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994 },
    ];

    return (
        <>
            <Head>
                <title>{t('movieoverview.title')}</title>
            </Head>
            <Header />
            <main className="bg-custom-blue min-h-screen flex flex-col items-center">
                <h1 className="text-white font-semibold text-center text-2xl">{t('movieoverview.title')}</h1>
                <section>
                    <MovieOverview movies={movies}/>
                </section>
                <Link href="/addmovie">
                    <button className="bg-green-button-home text-white font-semibold bg-hover-button-home mt-8 w-12 h-12 rounded-full flex items-center justify-center">
                        {
                            <img
                                src={`/images/plus-icon.png`}
                                alt="Plus Icon"
                                className="w-7"
                            />
                        }
                    </button>
                </Link>
            </main>
        </>
    );
};

export const getServerSideProps = async (context: { locale: any; }) => {
    const {locale} = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    };
};

export default Movie;
