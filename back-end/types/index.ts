type Role = 'admin' | 'user';

type UserInput = {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
};

type MovieInput = {
    id?: number;
    name: string;
    director: string;
    releaseYear: number;
    genre: string;
    userId: number;
};

type AuthenticationResponse = {
    id: number;
    token: string;
    username: string;
    role: string;
};

export {
    Role,
    UserInput,
    MovieInput,
    AuthenticationResponse
}