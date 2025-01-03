import UserService from "@/services/UserService";
import { User, StatusMessage } from "@/types";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";

const UserLoginForm: React.FC = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
    const router = useRouter();

    const { t } = useTranslation();


    const clearErrors = () => {
        setNameError(null);
        setPasswordError(null);
        setStatusMessages([]);
    };

    const validate = (): boolean => {
        let result = true;

        if (!name && name.trim() === "") {
            setNameError(t('loginform.error.errorusername'));
            result = false;
        }

        if (!password && password.trim() === "") {
            setPasswordError(t('loginform.error.errorpassword'));
            result = false;
        }

        return result;
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        clearErrors();

        if (!validate()) {
            return;
        }

        const user = {username: name, password};
        const response = await UserService.loginUser(user);

        if (response.ok) {
            setStatusMessages([
                {
                    message: t('loginform.success'),
                    type: "success",
                },
            ]);

            const user = await response.json();

            sessionStorage.setItem("loggedInUser", JSON.stringify(user));

            setTimeout(() => {
                router.push("/");
            }, 2000);
        }


    };

    return (
        <>
            <form style={{ height: '420px' }} className=" w-1/3 m-auto mt-4 flex flex-col items-center border border-black bg-forms-grey rounded-lg" onSubmit={handleSubmit}>
                <h1 className="font-semibold text-4xl mt-10 mb-8">{t('loginform.title')}</h1>
                {statusMessages && (
                    <div className="row">
                        <ul className="list-none mb-3 mx-auto ">
                            {statusMessages.map(({ message, type }, index) => (
                                <li
                                    key={index}
                                    className={classNames({
                                        "text-red-600": type === "error",
                                        "text-green-800": type === "success",
                                    })}
                                >
                                    {message}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    <div className="text-white mt-2 mb-2">
                        <label htmlFor="nameInput" className="text-xl mr-52 mb-2">
                            {t('loginform.username')}
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="nameInput"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="text-black w-full p-2.5 bg-white rounded-lg"
                        />
                        {nameError && <div className="text-red-600 ">{nameError}</div>}
                    </div>
                </div>
                <div className="text-white mt-2 mb-2">
                    <div>
                        <label
                            htmlFor="passwordInput"
                            className="text-xl mr-52 mb-2"
                        >
                            {t('loginform.password')}
                        </label>
                    </div>
                    <div className="block mb-2 text-sm font-medium">
                        <input
                            id="passwordInput"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="text-black w-full p-2.5 bg-white rounded-lg"
                        />
                        {passwordError && (
                            <div className=" text-red-600">{passwordError}</div>
                        )}
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        className="bg-green-button-home text-white font-semibold py-2 px-8 rounded-lg bg-hover-button-home"
                        type="submit"
                    >
                        {t('loginform.loginbutton')}
                    </button>
                </div>
            </form>
        </>
    );
};

export default UserLoginForm;
