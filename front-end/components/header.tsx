import Link from "next/link";
import React, { useEffect, useState } from "react";
import Language from "./language/Language";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null);

  const {t} = useTranslation();

    useEffect(() => {
        const user = sessionStorage.getItem("loggedInUser");
        if (user) {
            const parsedUser = JSON.parse(user);
            setLoggedInUser(parsedUser);
            setLoggedInUsername(parsedUser.username);
        }
    }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  }

  return (
      <header className="bg-custom-blue text-white flex justify-between items-start py-6 px-4">
          <div className="flex flex-row mini:ml-10 mt-1 ml-4">
        <Link href="/">
          {
            <img
                src={`/images/screenranklogo.png`}
                alt="ScreenRank Logo"
                className="w-60"
            />
          }
        </Link>
        <nav className="items-center flex md:flex-row flex-col ml-8">
          <Link
              href="/"
              className="relative px-4 text-2xl font-semibold after:content-[''] after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-1 hover:after:w-11/12 after:transition-all after:duration-300 mr-7"
          >
              {t('header.nav.home')}
          </Link>

            {!loggedInUser ? (
                <Link
                    href="/login"
                    className="relative px-4 text-2xl font-semibold after:content-[''] after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-1 hover:after:w-11/12 after:transition-all after:duration-300"
                >
                    {t('header.nav.login')}
                </Link>
            ) : (
                <>
                    <a
                        href="/"
                        onClick={handleLogOut}
                        className="relative px-4 text-2xl font-semibold after:content-[''] after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-1 hover:after:w-11/12 after:transition-all after:duration-300"
                    >
                        {t('header.nav.logout')}
                    </a>
                    <Link
                        href="/movie"
                        className="relative px-4 text-2xl font-semibold after:content-[''] after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-1 hover:after:w-11/12 after:transition-all after:duration-300 mr-7"
                    >
                        {t('header.nav.overview')}
                    </Link>
                </>
            )}
            {loggedInUser && (
                <div className="text-white ms-5 mt-2 md:mt-0 pt-1 md:pt-0 grow">
                    {t('header.hello')}, {loggedInUsername}!
                </div>
            )}
        </nav>
          </div>
          <div className="ml-auto mt-6 mr-24">
            <Language />
          </div>
      </header>
  );
};

export default Header;