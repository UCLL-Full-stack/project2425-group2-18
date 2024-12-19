import Header from "@/components/header";
import Head from "next/head";
import React from 'react';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t('app.title')}</title>
                <meta name="description" content="Exam app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="text-center md:p-24 p-6 min-h-screen bg-custom-blue m-0">
                <h1 className="text-white font-bold text-6xl mb-8">{t('home.welcome')}</h1>
                <p className="text-white max-w-2xl mx-auto">{t('home.text')}</p>
                <Link href="/login">
                    <button className="bg-green-button-home text-white font-semibold py-4 px-8 rounded-lg bg-hover-button-home mt-8">
                        {t('home.startbutton')}
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

export default Home;