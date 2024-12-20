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
    if (typeof window !== "undefined") {
        const user = sessionStorage.getItem("loggedInUser");
        return user ? JSON.parse(user).username : null;
    }
    return null;
};

const getLoggedInUserId = (): number | null => {
    if (typeof window !== "undefined") {
        const user = sessionStorage.getItem("loggedInUser");
        return user ? JSON.parse(user).id : null;
    }
    return null;
};

const UserService = {
    loginUser,
    getLoggedInUsername,
    getLoggedInUserId
};

export default UserService;