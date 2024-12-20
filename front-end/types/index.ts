export type User = {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
};

export type StatusMessage = {
    message: string;
    type: "error" | "success";
};

export type Movie = {
    id?: number;
    name: string;
    director: string;
    releaseYear: number;
    genre: string;
    userId: number;
};


