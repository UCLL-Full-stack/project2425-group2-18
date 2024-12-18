import Head from "next/head";
import Header from "@/components/header";
import Link from "next/link";

const Movie: React.FC = () => {
    return (
        <>
            <Head>
                <title>Movie Overview</title>
            </Head>
            <Header />
            <main className="bg-custom-blue min-h-screen flex flex-col items-center">
                <h1 className="text-white font-semibold text-center text-2xl">Movie Overview</h1>
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

export default Movie;
