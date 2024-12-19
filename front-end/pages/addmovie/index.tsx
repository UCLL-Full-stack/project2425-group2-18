import Head from "next/head";
import Header from "@/components/header";
import AddMovieForm from "@/components/movies/AddMovieForm";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const AddMovie: React.FC = () => {
    return (
        <>
            <Head>
                <title>Add Movie</title>
            </Head>
            <Header />
            <main>
                <section className="bg-custom-blue p-6 min-h-screen flex flex-col items-center">
                    <AddMovieForm/>
                </section>
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

export default AddMovie;
