import Head from "next/head";
import Header from "@/components/header";
import Link from "next/link";
import MovieOverview from "@/components/movies/MovieOverview";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const Movie: React.FC = () => {

    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>{t('movieoverview.title')}</title>
            </Head>
            <Header />
            <main className="bg-custom-blue min-h-screen flex flex-col items-center">
                <h1 className="text-white font-semibold text-center text-2xl">{t('movieoverview.title')}</h1>
                <section>
                    <MovieOverview />
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
