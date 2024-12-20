import Head from "next/head";
import Header from "@/components/header";
import UserLoginForm from "@/components/users/UserLoginForm";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import UserTable from "@/components/users/UserTable";

const Login: React.FC = () => {

    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>{t('loginform.title')}</title>
            </Head>
            <Header />
            <main>
                <section className="bg-custom-blue p-6 min-h-screen flex flex-col items-center">
                    <UserTable />
                    <UserLoginForm />
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

export default Login;
