import Header from "@/components/header";
import Head from "next/head";
import React from 'react';

const Home: React.FC = () => {

    return (
        <>
            <Head>
                <title>ScreenRank</title>
                <meta name="description" content="Exam app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="text-center md:p-24 p-6 min-h-screen bg-custom-blue m-0">
                <h1 className="text-white font-bold text-6xl mb-8">Welcome to ScreenRank</h1>
                <p className="text-white max-w-2xl mx-auto">Rate the movies you love with ScreenRank! Save every film
                    you’ve watched, rate them, and curate your personal movie collection. Easily sort your favorites by
                    genre and rating, and relive the magic of your top picks or avoid the ones that missed the mark.
                    Start building your ultimate movie library today!</p>
                <button className="bg-green-button-home text-white font-semibold py-4 px-8 rounded-lg bg-hover-button-home mt-8">
                    Let's get started!
                </button>
            </main>
        </>
    );
};

export default Home;