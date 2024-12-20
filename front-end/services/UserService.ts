import { User } from "@/types";

const loginUser = (user: User) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
};

const getLoggedInUsername = (): string | null => {
    const user = sessionStorage.getItem("loggedInUser");
    return user ? JSON.parse(user).username : null;
};

const UserService = {
    loginUser,
    getLoggedInUsername,
};

export default UserService;