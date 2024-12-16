import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const user = sessionStorage.getItem("loggedInUser");
    setLoggedInUser(user);
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
            Home
          </Link>

          {loggedInUser ? (
              <>
                <button
                    onClick={handleLogOut}
                    className="px-4 text-xl hover:bg-gray-600 rounded-lg"
                >
                  Logout
                </button>
                <div className="ms-5 mt-2 md:mt-0 pt-1 md:pt-0 grow">
                  Welcome, {loggedInUser}!
                </div>
              </>
          ) : (
              <Link
                  href="/login"
                  className="relative px-4 text-2xl font-semibold after:content-[''] after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-1 hover:after:w-11/12 after:transition-all after:duration-300"
              >
                Login
              </Link>
          )}
        </nav>
          </div>
      </header>
  );
};

export default Header;