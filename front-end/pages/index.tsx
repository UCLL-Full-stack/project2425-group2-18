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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <header className="w-full bg-blue-600 text-white py-4">
          <h1 className="text-3xl text-center">ScreenRank</h1>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center">
          <p className="text-xl text-black mb-4">Welcom to ScreenRank</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Click Me
          </button>
        </main>
        <footer className="w-full bg-gray-800 text-white py-4 text-center">
          <p>Homepage</p>
        </footer>
      </div>
    </>
  );
};

export default Home;